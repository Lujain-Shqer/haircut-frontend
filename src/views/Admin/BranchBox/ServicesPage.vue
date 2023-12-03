<template>
  <div class="servicesPage">
    <div class="container">
      <h4>الخدمات</h4>
      <p>التي تشمل الخدمات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة</p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <router-link to="/AddServices">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">سعر الخدمة</th>
              <th scope="col">المدة العمل</th>
              <th scope="col">الفرع</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="service in servicesToDisplay" :key="service.id">
              <td>{{ service.name }}</td>
              <td>{{ service.price }}</td>
              <td>{{ service.duration }}</td>
              <td>{{ service.branch_id }}</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
                <button @click="deleteProduct(service.id)" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="services.length"
              @page-change="changePage"
            ></paginationFoot>
            <!-- <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td> -->
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "ServicesPage",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      services: [],
      servicesPerPage: 7,
      currentPage: 1,
    };
  },
  computed: {
    servicesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.servicesPerPage;
      const endIndex = startIndex + this.servicesPerPage;
      return this.services.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.services.length / this.servicesPerPage);
    },
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/service/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.services = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteProduct(serviceId) {
      fetch("http://127.0.0.1:8001/api/service/" + serviceId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.services = this.services.filter(
              (service) => service.id !== serviceId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting service:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.servicesPage {
  direction: rtl;
  width: 80%;
}
.servicesPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.servicesPage p {
  color: #1a2669;
  font-weight: 400;
}
.servicesPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.servicesPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.servicesPage .input-container {
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
.servicesPage input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.servicesPage input::placeholder {
  color: #3f51b5;
}
.servicesPage .input-container svg {
  padding-left: 0.2vh;
}

.servicesPage .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.servicesPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.servicesPage table tr td,
.servicesPage table tr th {
  color: #1a2669;
}
.servicesPage table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.servicesPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.servicesPage table thead tr th,
.servicesPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.servicesPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.servicesPage table tfoot td:last-of-type {
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
  .servicesPage {
    width: 70%;
  }
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .servicesPage {
    width: 100%;
  }
  .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
  }
}
@media (max-width: 540px) {
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
