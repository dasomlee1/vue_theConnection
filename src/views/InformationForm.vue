<template>
    <div>

        <v-card class="pa-5 py-0 ">
            <v-form
                    ref="form"
            >
                <h1 class="font-weight-bold py-3">기본입력사항</h1>
                <v-row>
                <v-col cols="6">
                    <v-text-field
                            :counter="10"
                            label="이름"
                            placeholder="이름을 입력해주세요."
                            class="black--text"
                            outlined
                    ></v-text-field>
                    <v-text-field
                            label="연락처"
                            placeholder="연락처를 입력해주세요."
                            outlined
                    ></v-text-field>
                    <v-text-field
                            label="E-mail"
                            placeholder="E-mail을 입력해주세요."
                            outlined
                    ></v-text-field>
                    <v-flex x1 class="input-area" >
                        <v-text-field
                                label="직장명"
                                placeholder="직장명을 입력해주세요."
                                outlined
                        ></v-text-field>
                        <v-btn class="btn-input" color="secondary">입력</v-btn>
                    </v-flex>
                    <v-text-field
                            label="부서"
                            placeholder="부서를 입력해주세요."
                            outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="6">
                    <v-flex x1 class="input-area" >
                        <v-text-field
                                label="활동지역"
                                placeholder="활동지역을 입력해주세요."
                                outlined
                        ></v-text-field>
                        <v-btn class="btn-input" color="secondary">입력</v-btn>
                    </v-flex>
                    <v-text-field
                            label="공유게런티"
                            value="110,000원"
                            outlined
                    ></v-text-field>
                    <v-text-field
                            label="직급"
                            placeholder="직급을 입력해주세요."
                            outlined
                    ></v-text-field>
                </v-col>
                </v-row>

                <h1 class="font-weight-bold py-3">상세입력사항</h1>
                <v-row>
                <v-col cols="6">
                    <v-flex x1 class="input-area hash" >
                        <v-text-field
                                label="담당업무/직종/능력"
                                placeholder="빈칸을 입력해주세요."
                                outlined
                        ></v-text-field>
                        <v-btn class="btn-input" color="secondary">입력</v-btn>
                    </v-flex>
                    <p>#변호사 #이혼전문</p>
                    <v-flex x1 class="input-area hash" >
                        <v-text-field
                                label="취미/모임/성향"
                                placeholder="빈칸을 입력해주세요."
                                outlined
                        ></v-text-field>
                        <v-btn class="btn-input" color="secondary">입력</v-btn>
                    </v-flex>
                    <p>#골프 #등산</p>
                </v-col>
                </v-row>
            </v-form>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "InformationForm"
    }
</script>

<style scoped>

</style>