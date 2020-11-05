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

                    <v-btn
                            :disabled="!valid"
                            color="primary"
                            class="mt-3 v-picker--full-width"
                            @click="validate"
                    >
                        로그인
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
                    this.$router.push({name:'Home'})
                }
            },
        },
    }
</script>

<style scoped>

</style>