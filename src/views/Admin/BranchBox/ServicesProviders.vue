<template>
  <div class="servicesProviders">
    <div class="container">
      <h4>مقدمو الخدمات العامة</h4>
      <p>
        مقدمو الخدمات العامة هم الأشخاص أو الكيانات التي يقدمون خدمات للجمهور أو
        المؤسسات بدون تخصيص معين وعلى نطاق عام. هؤلاء المقدمون يشملون مجموعة
        متنوعة من القطاعات
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input
              class="input-field"
              type="text"
              placeholder="البحث عن..."
              v-model="searchQuery"
              @keyup.enter="search"
            />
          </div>
          <router-link to="/AddProviders">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">حالة الضريبة</th>
              <th scope="col">رقم الضريبي</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="generalProvidersToDisplay.length > 0">
            <tr
              v-for="provider in generalProvidersToDisplay"
              :key="provider.id"
            >
              <td>{{ provider.name }}</td>
              <td>{{ showTaxSate(provider.tax_state) }}</td>
              <td>{{ showTaxNumber(provider.tax_number) }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateProviders', params: { id: provider.id } }"
                >
                  <button class="btn show">
                    <fa icon="pen" /> تعديل
                  </button></router-link
                >
                <button
                  @click="deleteGeneralProvider(provider.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="generalProviders.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "ServicesProviders",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      generalProviders: [],
      generalProvidersPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    generalProvidersToDisplay() {
      const startIndex = (this.currentPage - 1) * this.generalProvidersPerPage;
      const endIndex = startIndex + this.generalProvidersPerPage;
      return this.generalProviders.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.generalProviders.length / this.generalProvidersPerPage
      );
    },
  },
  mounted() {
    this.fetchGeneralProviders();
  },
  methods: {
    fetchGeneralProviders() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/provider/" +
            localStorage.getItem("branch_id"),
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            this.generalProviders = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteGeneralProvider(generalProviderId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/provider/" +
          generalProviderId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            this.generalProviders = this.generalProviders.filter(
              (generaProvider) => generaProvider.id !== generalProviderId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting provider:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    showTaxSate(taxState) {
      return taxState === 1 ? "مفعلة" : " غير مفعلة";
    },
    showTaxNumber(taxNumber) {
      return taxNumber === -1 ? "-" : taxNumber;
    },
    updateMessage() {
      if (this.generalProviders.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد مقدمي خدمة لعرضهم";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/provider/" +
          localStorage.getItem("branch_id"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: this.searchQuery,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => ((this.generalProviders = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchGeneralProviders().then(() => {
          this.updateMessage();
        });
      }
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.servicesProviders {
  direction: rtl;
  width: 77%;
}
.servicesProviders h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.servicesProviders p {
  color: #1a2669;
  font-weight: 400;
}
.servicesProviders .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.servicesProviders .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.servicesProviders .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.servicesProviders input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.servicesProviders input::placeholder {
  color: #3f51b5;
}
.servicesProviders .input-container svg {
  padding-left: 0.2vh;
}

.servicesProviders .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.servicesProviders table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.servicesProviders table tr td,
.servicesProviders table tr th {
  color: #1a2669;
}
.servicesProviders table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
  margin-bottom: 1vh;
}
.servicesProviders table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.servicesProviders table thead tr th,
.servicesProviders table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.servicesProviders table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.servicesProviders table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  .servicesProviders {
    width: 70%;
  }
  /* .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  } */
}
@media (max-width: 765px) {
  .servicesProviders {
    width: 100%;
  }
  /* .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
  } */
}
@media (max-width: 540px) {
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}
</style>
