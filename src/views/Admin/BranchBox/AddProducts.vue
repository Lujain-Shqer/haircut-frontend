<template>
  <div class="addProducts">
    <div class="container">
      <h4>المنتجات</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client row">
        <h6>أنشاء منتج جديد</h6>
        <div class="col-lg-7 col-sm-12">
          <form @submit.prevent="addProduct" id="my-form" class="row">
            <div class="col-md-12">
              <label>الاسم</label>
              <input
                type="text"
                placeholder=" اسم "
                v-model="product_info.name"
                required
              />
            </div>
            <div class="col-md-12">
              <label>سعر الشراء</label>
              <input
                type="text"
                placeholder=" سعر الشراء "
                v-model="product_info.purchasing_price"
                required
              />
            </div>
            <div class="col-md-12">
              <label>سعر البيع</label>
              <input
                type="text"
                placeholder="  سعر البيع "
                v-model="product_info.selling_price"
                required
              />
            </div>
          </form>
        </div>
        <div class="download-image col-lg-5 col-sm-12">
          <input
            ref="fileInput"
            type="file"
            style="display: none"
            @change="handleFileChange"
          />
          <h6 class="text-center">يرجى تحميل صورة المنتج</h6>
          <div
            class="downloaded"
            @dragover.prevent="onDragOver"
            @dragleave.prevent="onDragLeave"
            @drop.prevent="onDrop"
          >
            <img src="../../../assets/downloaded.png" />
            <h6 v-if="!isDropped">حدد ملفًا أو قم بالسحب والإسقاط هنا</h6>
            <p v-if="!isDropped">
              JPG, PNG or PDF, file size no more than 10MB
            </p>
            <h6 v-else>تم اختيار صورة بنجاح</h6>
            <button @click="openFilePicker" class="btn">Select file</button>
          </div>
          <div class="error-message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </div>
        <div v-if="errors.length > 0">
          <ul>
            <li
              class="error-message"
              dir="rtl"
              v-for="(error, index) in errors"
              :key="index"
            >
              {{ error }}
            </li>
          </ul>
        </div>
        <button :disabled="isLoading" @click="submitForm" class="btn">
          إضافة منتج جديد
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProducts",
  data() {
    return {
      product_info: {
        name: "",
        purchasing_price: "",
        selling_price: "",
        image: "",
      },
      errorMessage: "",
      errors: [],
      isDragging: false,
      isDropped: false,
      isLoading: false,
    };
  },
  methods: {
    addProduct() {
      this.isLoading = true;
      let formData = new FormData();
      // Append form fields to the FormData
      formData.append("branch_id", localStorage.getItem("branch_id"));
      formData.append("name", this.product_info.name);
      formData.append("purchasing_price", this.product_info.purchasing_price);
      formData.append("selling_price", this.product_info.selling_price);
      formData.append("image", this.product_info.image);
      fetch("https://www.setrex.net/haircut/backend/public/api/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: formData,
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ProductsPage" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors.length > 0) {
                this.errors = [];
              }
              if (typeof errors === "string") {
                this.errors.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors = [];
              }, 10000);
            }
          });
        }
      });
    },
    openFilePicker() {
      // Trigger click on the hidden file input
      this.$refs.fileInput.click();
    },
    checkValidImage(selectedFile) {
      if (selectedFile) {
        // Check the file extension
        const allowedExtensions = ["pdf", "jpeg", "jpg", "png"]; // Add more extensions as needed
        const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

        // Check the file size (less than 10MB)
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
        if (selectedFile.size <= maxSizeInBytes) {
          // File has a valid size
          if (allowedExtensions.includes(fileExtension)) {
            // File has a valid extension
            console.log("Selected file:", selectedFile);
            console.log("type:", typeof selectedFile);
            this.product_info.image = selectedFile;
            this.isDropped = true;
          } else {
            // Invalid file extension
            this.errorMessage = "لاحقة ملف غير صحيحة.";
            setTimeout(() => {
              this.errorMessage = "";
            }, 10000);
          }
        } else {
          // File size exceeds 10MB
          this.errorMessage += "اختر ملف أصغر حجماً.";
          setTimeout(() => {
            this.errorMessage = "";
          }, 10000);
        }
      }
    },
    handleFileChange(event) {
      // Handle the selected file
      const selectedFile = event.target.files[0];
      this.checkValidImage(selectedFile);
    },
    onDragOver(event) {
      this.isDragging = true;
      event.dataTransfer.dropEffect = "copy";
    },
    onDragLeave() {
      this.isDragging = false;
    },
    onDrop(event) {
      this.isDragging = false;
      if (event.dataTransfer.files.length > 0) {
        const selectedFile = event.dataTransfer.files[0];
        this.checkValidImage(selectedFile);
        this.isDropped = true;
      } else {
        console.log("no files");
      }
    },
    submitForm() {
      // Get the form by its id
      const form = document.getElementById("my-form");

      // Check if the form exists before submitting
      if (form) {
        this.addProduct();
        // form.submit();
        console.log("submit");
      } else {
        console.error("Form not found!");
      }
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}

.addProducts {
  direction: rtl;
  width: 77%;
}

.addProducts h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.addProducts p {
  color: #1a2669;
  font-weight: 400;
}

.addProducts .update-info-client {
  margin: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}

.addProducts h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin: 3vh 0;
}

.addProducts label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}

.addProducts input,
.addProducts .form-selec {
  border: 1px solid #c8c9cc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}

.addProducts input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}

.addProducts input[type="text"]:focus {
  border: 1px solid #1a2669;
}

.addProducts form span {
  font-weight: 600;
  color: #1a2669;
}

.addProducts button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 40%;
  margin: auto;
  margin-top: 5vh;
}

.addProducts .downloaded {
  text-align: center;
  border: 1px dashed #00000040;
  border-radius: 8px;
  padding: 3vh 1vh;
}

.addProducts .downloaded img {
  margin: 1vh 0;
}

.addProducts .downloaded button {
  border: 1px solid #1a2669;
  background: #fff;
  color: #0f91d2;
}

.error-message {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
ul {
  margin-top: 30px;
}

@media (max-width: 991px) {
  .addProducts input[type="text"],
  .addProducts select {
    width: 100% !important;
  }

  .addProducts button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }

  .addProducts {
    width: 70%;
  }
}

@media (max-width: 765px) {
  .addProducts {
    width: 100%;
  }
}
</style>
