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
            <input class="input-field" type="text" placeholder="البحث عن..." />
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
          <tbody>
            <tr v-for="client in clients" :key="client.id">
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
          <!-- <tbody>
            <tr>
              <td>3451</td>
              <td>علي الأحد</td>
              <td>096367364</td>
              <td class="text-center">
                <router-link to="/updateClient">
                  <button class="btn update">
                    <fa icon="pencil" /> تعديل
                  </button></router-link
                >
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody> -->
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من {{ clients.length }} عنصر
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientPage",
  data() {
    return {
      clients: [],
    };
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/customer/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.clients = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteClient(clientId) {
      fetch("http://127.0.0.1:8001/api/customer/" + clientId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
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
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.client {
  direction: rtl;
  width: 80%;
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
  width: 35%;
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
  width: 20%;
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
}
.client table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 10px;
}
.client table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.client table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.client table thead tr th,
.client table tfoot tr th {
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
  .client {
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
  .client {
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
