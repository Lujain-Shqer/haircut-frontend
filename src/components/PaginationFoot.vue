<template>
  <!-- <tfoot>
    <td>صفوف لكل الصفحة</td>
    <td></td>
    <td></td> -->
  <td>
    <fa @click="previousPage" icon="	fas fa-angle-right" />
    <fa @click="nextPage" icon="	fas fa-angle-left" />{{ currentPage }}-{{
      totalPages
    }}
    من {{ totalData }} عنصر
  </td>
  <!-- </tfoot> -->
</template>

<script>
export default {
  name: "PaginationFoot",
  props: {
    currentPage: Number,
    totalPages: Number,
    totalData: Number,
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("page-change", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("page-change", this.currentPage + 1);
      }
    },
  },
};
</script>

<style scoped>
tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
td {
  text-align: end;
  padding-left: 5vh;
}
td svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
</style>
