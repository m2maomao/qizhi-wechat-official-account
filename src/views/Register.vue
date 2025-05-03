<template>
  <div class="register-container">
    <div class="form-header">
      <van-icon name="records-o" class="icon" />
      <h2 class="form-title">预约报名</h2>
      <p class="form-subtitle">填写信息，我们将尽快与您联系</p>
    </div>

    <VanForm
      ref="formRef"
      @submit="onSubmit"
      class="registration-form"
    >
      <div class="form-group">
        <div class="form-label">宝宝信息</div>
        <VanCellGroup inset>
          <VanField
            v-model="form.babyName"
            name="babyName"
            label="宝宝姓名"
            placeholder="请输入宝宝姓名"
            :rules="[{ required: true, message: '请输入宝宝姓名' }]"
          />

          <VanField name="gender" label="性别">
            <template #input>
              <VanRadioGroup v-model="form.gender" direction="horizontal">
                <VanRadio name="男">男</VanRadio>
                <VanRadio name="女">女</VanRadio>
              </VanRadioGroup>
            </template>
          </VanField>

          <VanField
            readonly
            name="birthDate"
            label="出生日期"
            :model-value="form.birthDate ? formatDate(form.birthDate) : ''"
            placeholder="点击选择日期"
            @click="openDatePicker"
          />
        </VanCellGroup>
      </div>

      <div class="form-group">
        <div class="form-label">家长信息</div>
        <VanCellGroup inset>
          <VanField
            v-model="form.parentName"
            name="parentName"
            label="家长姓名"
            placeholder="请输入家长姓名"
            :rules="[{ required: true, message: '请输入家长姓名' }]"
          />

          <VanField
            v-model="form.contactNumber"
            name="contactNumber"
            label="联系方式"
            placeholder="请输入手机号码"
            :rules="[
              { required: true, message: '请输入联系方式' },
              { validator: validatePhone, message: '请输入正确的手机号码' }
            ]"
          />
        </VanCellGroup>
      </div>

      <div class="form-group">
        <div class="form-label">预约信息</div>
        <VanCellGroup inset>
          <VanField
            readonly
            name="kindergarten"
            label="预约园所"
            :model-value="form.kindergarten ? getKindergartenLabel(form.kindergarten) : ''"
            placeholder="点击选择园所"
            @click="showKindergartenPicker = true"
          />

          <VanField
            v-model="form.remarks"
            name="remarks"
            label="备注信息"
            type="textarea"
            placeholder="如有其他需求，请在此说明"
            rows="3"
            autosize
          />
        </VanCellGroup>
      </div>

      <div class="submit-area">
        <VanButton round block type="primary" native-type="submit" class="submit-button">提交报名</VanButton>
      </div>
    </VanForm>

    <!-- 日期选择器弹出层 -->
    <VanPopup v-model:show="showDatePicker" position="bottom" round>
      <VanDatePicker
        v-model="currentDate"
        title="选择出生日期"
        :min-date="minDate"
        :max-date="new Date()"
        @confirm="onConfirmDate"
        @cancel="showDatePicker = false"
      />
    </VanPopup>

    <!-- 园所选择器弹出层 -->
    <VanPopup v-model:show="showKindergartenPicker" position="bottom" round>
      <VanPicker
        title="选择预约园所"
        :columns="kindergartenOptions"
        value-key="label"
        @confirm="onConfirmKindergarten"
        @cancel="showKindergartenPicker = false"
      />
    </VanPopup>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
  showToast,
  Form as VanForm,
  Field as VanField,
  CellGroup as VanCellGroup,
  Button as VanButton,
  RadioGroup as VanRadioGroup,
  Radio as VanRadio,
  Icon as VanIcon,
  Popup as VanPopup,
  Picker as VanPicker,
  DatePicker as VanDatePicker
} from 'vant';

const formRef = ref(null);
const showDatePicker = ref(false);
const showKindergartenPicker = ref(false);
const currentYear = new Date().getFullYear();
const minDate = ref(new Date(currentYear - 10, 0, 1)); // 当前年份往前10年
// 使用数组格式的日期
const currentDate = ref([currentYear.toString(), '01', '01']);

const form = reactive({
  babyName: '',
  gender: '',
  birthDate: '',
  parentName: '',
  contactNumber: '',
  kindergarten: '',
  remarks: ''
});

const kindergartenOptions = [
  { value: '总园', label: '启智幼儿园（总园）', text: '启智幼儿园（总园）' },
  { value: '东区分园', label: '启智幼儿园（东区分园）', text: '启智幼儿园（东区分园）' },
  { value: '西区分园', label: '启智幼儿园（西区分园）', text: '启智幼儿园（西区分园）' },
  { value: '南区分园', label: '启智幼儿园（南区分园）', text: '启智幼儿园（南区分园）' }
];

const validatePhone = (val) => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!val) return false;
  return phoneRegex.test(val.trim());
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return dateStr; // 已经是格式化的字符串，不需要再处理
};

const getKindergartenLabel = (value) => {
  const option = kindergartenOptions.find(item => item.value === value);
  return option ? option.label : '';
};

const openDatePicker = () => {
  showDatePicker.value = true;
};

const onConfirmDate = ({ selectedValues }) => {
  // 在 Vant 4.x 中，confirm 事件传递一个对象，其中包含 selectedValues 属性
  // selectedValues 是一个字符串数组，例如 ['2020', '05', '01']
  const year = selectedValues[0];
  const month = selectedValues[1].padStart(2, '0');
  const day = selectedValues[2].padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  form.birthDate = dateStr;
  showDatePicker.value = false;
};

const onConfirmKindergarten = ({ selectedValues, selectedOptions }) => {
  // selectedOptions 包含完整的选中对象
  if (selectedOptions.length > 0) {
    form.kindergarten = selectedOptions[0].value;
  }
  showKindergartenPicker.value = false;
};

const onSubmit = () => {
  // 这里可以添加提交表单的逻辑，例如发送到后端API
  console.log('表单提交成功', form);
  showToast({
    type: 'success',
    message: '报名信息提交成功，我们将尽快与您联系！',
    position: 'bottom',
  });
  // 提交成功后重置表单
  resetForm();
};

const resetForm = () => {
  form.babyName = '';
  form.gender = '';
  form.parentName = '';
  form.contactNumber = '';
  form.remarks = '';
  // 重置为当前年份
  currentDate.value = [currentYear.toString(), '01', '01'];
};
</script>

<style scoped lang="scss">
.register-container {
  max-width: 100%;
  margin: 0 auto;
  background-color: #f5f7fa;
  padding-bottom: 2rem;
}

.banner {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.5rem;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-header {
  text-align: center;
  margin: 1.5rem auto;
  padding: 0 1rem;
  .icon {
    color: #f74d19;
    font-size: 24px;
  }
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  font-size: 0.9rem;
  color: #666;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
}

.registration-form {
  padding: 0 1rem;
}

.submit-area {
  margin: 2rem 0;
  padding: 0 1rem;
}

.submit-button {
  height: 44px;
  font-size: 1rem;
  background-color: #4fc08d;
  border-color: #4fc08d;
}

.contact-info {
  background-color: white;
  padding: 1.5rem;
  margin: 0 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: #666;
}

.contact-icon {
  margin-right: 0.5rem;
  color: #4fc08d;
}

/* 自定义 Vant 组件样式 */
:deep(.van-cell) {
  padding: 15px 16px;
}

:deep(.van-field__label) {
  width: 80px;
  color: #333;
}

:deep(.van-radio__label) {
  color: #333;
}

:deep(.van-cell-group--inset) {
  margin: 0;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .banner {
    height: 150px;
  }
}

/* Vant 组件样式覆盖 */
:deep(.van-picker__confirm) {
  color: #4fc08d;
}

:deep(.van-picker__cancel) {
  color: #969799;
}

:deep(.van-picker-column__item--selected) {
  color: #4fc08d;
}

:deep(.van-picker__title) {
  font-size: 16px;
  font-weight: bold;
}
</style>
