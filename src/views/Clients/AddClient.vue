<template>
  <div class="AddClient">
    <div class="container">
      <h4>العملاء</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="update-info-client">
        <h6>إضافة بيانات العميل الجديد</h6>
        <form @submit="addClient" class="row" method="post">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder="إضافة اسم العميل"
              v-model="client_info.name"
              required
            />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>هاتف العميل</label>
            <input
              type="text"
              placeholder="إضافة هاتف العميل"
              v-model="client_info.phone_number"
              required
            />
          </div>
          <button :disabled="isLoading" class="btn">إضافة عميل</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddClient",
  data() {
    return {
      isLoading: false,
      client_info: {
        name: "",
        phone_number: "",
      },
    };
  },
  methods: {
    addClient(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/customer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.client_info.name,
          phone_number: this.client_info.phone_number,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ClientPage" });
          return response.json();
        }
      });
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddClient {
  direction: rtl;
  width: 77%;
}
.AddClient h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddClient p {
  color: #1a2669;
  font-weight: 400;
}
.AddClient .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddClient h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddClient label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.AddClient input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.AddClient input:focus {
  border: 1px solid #1a2669;
}
.AddClient input::placeholder {
  color: #c8c9cc;
}
.AddClient button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
}
@media (max-width: 991px) {
  .AddClient input {
    width: 100%;
  }
  .AddClient button {
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .AddClient {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddClient {
    width: 100%;
  }
}
</style>
