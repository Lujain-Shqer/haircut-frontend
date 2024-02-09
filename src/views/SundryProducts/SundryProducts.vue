<template>
  <div class="sundry">
    <div class="container">
      <h4>المنتجات النثرية</h4>
      <p>
        هي المنتجات التي يحتاجها الموظف أثناء العمل و تكون تحت حسابات المالية
        لبند المنتجات النثرية
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
          <router-link to="/AddSundry">
            <button class="btn">إنشاء جديد</button></router-link
          >
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم</th>
              <th scope="col">الاسم</th>
              <th scope="col">السعر</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="sundriesToDisplay.length > 0">
            <tr v-for="sundry in sundriesToDisplay" :key="sundry.id">
              <td>{{ sundry.id }}</td>
              <td>{{ sundry.name }}</td>
              <td>{{ sundry.price }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateSundry', params: { id: sundry.id } }"
                >
                  <button class="btn update">
                    <fa icon="pencil" /> تعديل
                  </button></router-link
                >
                <button @click="deleteSundry(sundry.id)" class="btn delete">
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
              :total-data="sundries.length"
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
  components: {
    PaginationFoot,
  },
  name: "SundryProducts",
  data() {
    return {
      sundries: [],
      sundriesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    sundriesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.sundriesPerPage;
      const endIndex = startIndex + this.sundriesPerPage;
      return this.sundries.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.sundries.length / this.sundriesPerPage);
    },
  },
  mounted() {
    this.fetchAllSundry();
  },
  methods: {
    fetchAllSundry() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/sundry/" +
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
            this.sundries = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteSundry(sundryId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/sundry/" + sundryId,
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
            this.sundries = this.sundries.filter(
              (sundry) => sundry.id !== sundryId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting sundry:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.sundries.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد منتجات نثرية لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/sundry/" +
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
        .then((data) => ((this.sundries = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllSundry().then(() => {
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
.sundry {
  direction: rtl;
  width: 77%;
}
.sundry h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.sundry p {
  color: #1a2669;
  font-weight: 400;
}
.sundry .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.sundry .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.sundry .input-container {
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
.sundry input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.sundry input::placeholder {
  color: #3f51b5;
}
.sundry .input-container svg {
  padding-left: 0.2vh;
}

.sundry .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.sundry table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.sundry table tr td,
.sundry table tr th {
  color: #1a2669;
}
.sundry table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 1px;
}
.sundry table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 10px;
}
.sundry table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.sundry table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.sundry table thead tr th,
.sundry table tfoot tr th {
  background: #3f51b5;
  color: #fff;
  height: 5vh;
  font-weight: 400;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  .sundry {
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
  .sundry {
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
