<template>
  <div class="taxReport">
    <div class="container">
      <h4>تقرير الضريبة (مشتريات)</h4>
      <p>
        غرض تسجيل وتوثيق المعاملات المتعلقة بالمشتريات التي تؤثر على الضرائب
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير الضريبة (مشتريات)</span>
          </div>
          <label for="">اختر السنة</label>
          <select>
            <option>2023</option>
            <option>2023</option>
            <option>2023</option>
          </select>
          <label for="">اختر الربع السنوي</label>
          <select>
            <option>2023</option>
            <option>2023</option>
            <option>2023</option>
          </select>
          <button class="btn">بحث</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col" class="text-center"></th>
            </tr>
          </thead>
          <tbody style="height: 10vh"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TaxReports",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.taxReport {
  direction: rtl;
  width: 80%;
}
.taxReport h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.taxReport p {
  color: #1a2669;
  font-weight: 400;
}
.taxReport .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.taxReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.taxReport .input-container {
  border-radius: 8px;
  width: 30%;
  float: right;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.taxReport .input-container svg {
  margin-left: 2vh;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #14141412;
  padding: 0 1vh;
  box-shadow: 0px 0px 6px -1px #1414141f;
}
.taxReport label {
  display: inline;
  color: #3f51b5;
  font-weight: 400;
}

.taxReport select {
  display: inline;
  width: auto !important;
  border: 1px solid #1a2669;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  outline: none;
  font-weight: 600;
  margin-left: 2vh;
}
.taxReport .extra-table button {
  background: #3f51b5;
  color: #fff;
  margin-right: 2vh;
  width: 10%;
}
.taxReport table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.taxReport table tr td,
.taxReport table tr th {
  color: #1a2669;
}

.taxReport table thead tr th,
.taxReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

@media (max-width: 991px) {
  .taxReport {
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
  .taxReport {
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
