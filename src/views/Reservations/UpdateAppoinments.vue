<template>
  <div class="updateAppoinments">
    <div class="container">
      <h4>مواعيد الصالون</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <h6>تعديل مواعيد الدوام الصالون</h6>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>اختر يوم من أيام الاسبوع : </label>
            <select class="form-selec">
              <option>الأحد</option>
              <option>الإثنين</option>
              <option>الثلاثاء</option>
              <option>الأربعاء</option>
              <option>الخميس</option>
              <option>الجمعة</option>
              <option>السبت</option>
            </select>
          </div>
          <div class="row times">
            <div class="col-xl-6 col-sm-12">
              <h5 class="first-step">من الساعة:</h5>
              <ul>
                <li>ص</li>
                <li>م</li>
              </ul>
              <input min="0" max="59" type="text" />
              <span>:</span>
              <input min="0" max="23" type="text" />
            </div>
            <div class="col-xl-6 col-sm-12">
              <h5 class="first-step">الى الساعة:</h5>
              <ul>
                <li>ص</li>
                <li>م</li>
              </ul>
              <input min="0" max="59" type="text" />
              <span>:</span>
              <input min="0" max="23" type="text" />
            </div>
          </div>
          <button class="btn">تعديل</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateAppoinments",
  data() {
    return {
      sundry_info: {
        name: "",
        price: "",
      },
    };
  },
  methods: {
    addSundry(event) {
      event.preventDefault();
      fetch("http://127.0.0.1:8001/api/sundry", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.sundry_info.name,
          price: this.sundry_info.price,
        }),
      }).then((response) => {
        if (response.ok) {
          this.$router.push({ name: "SundryProducts" });
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
.updateAppoinments {
  direction: rtl;
  width: 80%;
}
.updateAppoinments h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateAppoinments p {
  color: #1a2669;
  font-weight: 400;
}
.updateAppoinments .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateAppoinments h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateAppoinments label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
  color: #1a2669;
}
.form-selec {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 100%;
  outline: none;
}
.updateAppoinments span {
  color: #1a2669;
}
.updateAppoinments input {
  background: #ebedf7;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  width: 8vh;
  height: 8vh;
  outline: none;
  color: #1a2669;
  color: #1a2669;
  font-size: 4vh;
  text-align: center;
  font-weight: 500;
}
.updateAppoinments input ~ span {
  font-size: 5vmin;
  margin: 1vh;
}
.updateAppoinments .times {
  margin-top: 5vh;
}
.updateAppoinments .times .first-step {
  display: inline-block;
  color: #3f51b5;
}
.updateAppoinments ul {
  display: inline-block;
  color: #1a2669;
  list-style: none;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  margin: 0px 3vh;
}
.updateAppoinments ul li {
  padding: 10px;
}
.updateAppoinments ul li:hover {
  background: #ebedf7;
}

.updateAppoinments button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .updateAppoinments input {
    width: 100%;
  }
  .updateAppoinments button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateAppoinments {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateAppoinments {
    width: 100%;
  }
}
</style>
