<template>
  <div class="client">
    <div class="container">
      <h4>العملاء</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
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
          <router-link to="/addClient">
            <button class="btn">إضافة عميل جديد</button></router-link
          >
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم</th>
              <th scope="col">الموظف</th>
              <th scope="col">رقم الجوال</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="clientsToDisplay.length > 0">
            <tr v-for="client in clientsToDisplay" :key="client.id">
              <td>{{ client.id }}</td>
              <td>{{ client.name }}</td>
              <td>{{ client.phone_number }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateClient', params: { id: client.id } }"
                >
                  <button class="btn update">
                    <fa icon="pencil" /> تعديل
                  </button></router-link
                >
                <button @click="deleteClient(client.id)" class="btn delete">
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
              :total-data="clients.length"
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
// import { ref, onBeforeMount } from "vue";
export default {
  components: {
    PaginationFoot,
  },
  name: "ClientPage",
  data() {
    return {
      clients: [],
      clientsPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    clientsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.clientsPerPage;
      const endIndex = startIndex + this.clientsPerPage;
      return this.clients.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.clients.length / this.clientsPerPage);
    },
  },
  mounted() {
    this.fetchAllClients().then(() => {
      this.updateMessage();
    });
  },
  methods: {
    fetchAllClients() {
      return new Promise((resolve, reject) => {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/customer/" +
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
            this.clients = data;
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteClient(clientId) {
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/customer/" +
          clientId,
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
            this.clients = this.clients.filter(
              (client) => client.id !== clientId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting client:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.clients.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد عملاء لعرضهم";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/customer/" +
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
        .then((data) => ((this.clients = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllClients().then(() => {
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

.client {
  direction: rtl;
  width: 77%;
}

.client h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.client p {
  color: #1a2669;
  font-weight: 400;
}

.client .control-table {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}

.client .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}

.client .input-container {
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

.client input {
  border: 0;
  outline: none;
}

.client input::placeholder {
  color: #3f51b5;
}

.client .input-container svg {
  padding-left: 0.2vh;
}

.client .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}

.client table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}

.client table tr td {
  color: #1a2669;
}

.client table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 10px;
  margin-bottom: 1vh;
}

.client table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 10px;
  margin-bottom: 1vh;
}

.client table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

/*.client table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
} */
.client table thead tr th,
.client table tfoot tr th {
  background: #3f51b5;
  color: #fff;
  height: 5vh;
  font-weight: 400;
}

/* tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
} */

@media (max-width: 991px) {
  .client {
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
  .client {
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
