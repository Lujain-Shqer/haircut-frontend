<template>
  <div class="productsPage">
    <div class="container">
      <h4>المنتجات</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">إنشاء جديد</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">سعر الخدمة</th>
              <th scope="col">الفرع</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="../../../assets/salePoints/Prod/21.png" />
                زيت نيو هير تايلندي
              </td>
              <td>500.00</td>
              <td>صالون شعر & ذقن للحلاقة</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../../../assets/salePoints/Prod/20.png" />
                زيت نيو هير تايلندي
              </td>
              <td>500.00</td>
              <td>صالون شعر & ذقن للحلاقة</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../../../assets/salePoints/Prod/1.png" />
                زيت نيو هير تايلندي
              </td>
              <td>500.00</td>
              <td>صالون شعر & ذقن للحلاقة</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsPage",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.productsPage {
  direction: rtl;
  width: 80%;
}
.productsPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.productsPage p {
  color: #1a2669;
  font-weight: 400;
}
.productsPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.productsPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.productsPage .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 32%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.productsPage input {
  border: 0;
  outline: none;
}
.productsPage input::placeholder {
  color: #3f51b5;
}
.productsPage .input-container svg {
  padding-left: 0.2vh;
}

.productsPage .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.productsPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.productsPage table tr td,
.productsPage table tr th {
  color: #1a2669;
}
.productsPage table tr td img {
  width: 12%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 1vh;
}
.productsPage table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.productsPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.productsPage table thead tr th,
.productsPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.productsPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.productsPage table tfoot td:last-of-type {
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
  .productsPage {
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
  .productsPage {
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
