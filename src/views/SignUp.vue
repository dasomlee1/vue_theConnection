<template>
    <div>
        <div class="login-wrap">
            <div class="login-box black--text">
                <h1 class="title text-center text-h4 mb-5"><span>The</span> Connection</h1>
                <p class="subtitle-1 text-center text-h6">여러분의 인맥을 넓혀 보세요</p>
                <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="form-wrap"
                >

                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="이메일"
                            required
                    ></v-text-field>

                    <v-text-field
                            type="password"
                            label="비밀번호"
                            required
                    ></v-text-field>

                    <v-text-field
                            type="password"
                            label="비밀번호 확인"
                            required
                    ></v-text-field>

                    <p class="text-center subtitle-2">가입 버튼을 클릭하면 Theconnection <span class="blue--text">사용자약관,
                        개인정보 취급방침, 쿠키정책</span>에 동의하는 것으로
                        간주됩니다.
                    </p>

                    <v-btn
                            :disabled="!valid"
                            color="primary"
                            class="v-picker--full-width"
                            @click="validate"
                    >
                        가입하기
                    </v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            checkbox: false,
        }),

        methods: {
            validate () {
                if(this.$refs.form.validate()){
                    this.$router.push({name:'SignIn'})
                }
            },
        },
    }
</script>

<style scoped>

</style>