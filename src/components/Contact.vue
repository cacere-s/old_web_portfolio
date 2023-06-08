<template>
    <v-container class="mb-8">
        <section id="contacto" class="seccion">
            <v-snackbar v-model="snackbar.snack" :color="snackbar.color" :timeout="2000">
                <div>
                    <v-row>
                        <v-col sm="10">
                            {{ snackbar.text }}
                        </v-col>
                        <v-col sm="2" align="end">
                            <v-icon end :icon="snackbar.icon"></v-icon>
                        </v-col>
                    </v-row>
                </div>
            </v-snackbar>

            <h1 class=" text-center text-white text-h2 font-weight-bold mb-3 mt-7">Contacto</h1>
            <p class=" text-subtitle-1 text-center font-weight-medium font-italic"
                style="color:#646464; margin-bottom: 30px; ">Cualquier pregunta o comentario, Solo escríbanos un
                mensaje!</p>
        </section>
        <v-row>
            <v-col cols="12" sm="12" md="8" style="padding: 30px; background: #ffffff1d; ">
                <div style="display: flex; justify-content: space-between;">
                    <v-card-title class="text-h5 text-white font-weight-bold mb-3">Enviar mensaje</v-card-title>
                    <v-icon class="mr-3" icon="mdi-email-outline" style="font-size: 40px; color: #a9a9a9;"></v-icon>
                </div>
                <v-form class="form" @submit.prevent="sendEmail">
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field class="text-grey-lighten-3" label="Nombre *" name="name"
                                v-model="name.value.value" :error-messages="name.errorMessage.value" hide-details="auto"
                                color="white" variant="underlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field class="text-grey-lighten-3" label="Email *" name="email"
                                v-model="email.value.value" :error-messages="email.errorMessage.value"
                                placeholder="example@example.com" type="email" hide-details="auto" color="white"
                                variant="underlined"></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <v-text-field class="text-grey-lighten-3" label="Empresa/Organizacion" name="company"
                                v-model="company.value.value" :error-messages="company.errorMessage.value"
                                hide-details="auto" color="white" variant="underlined"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea class="text-grey-lighten-3" color="white" label="Mensaje *" name="message"
                                v-model="message.value.value" :error-messages="message.errorMessage.value"
                                variant="outlined"></v-textarea>
                        </v-col>
                    </v-row>
                    <div style="display: flex; justify-content: end">
                        <v-btn type="submit" icon="mdi-send" color="white" elevation="10"></v-btn>
                    </div>
                </v-form>

            </v-col>
            <v-col cols="12" sm="12" md="4" style="padding: 30px; background: #101010;  ">
                <div>
                    <v-card-title class="text-h5 text-white font-weight-bold mb-3">Informacion</v-card-title>
                    <div style="padding: 5px; position: relative; margin-top: 30px">
                        <p class="text-white" style="margin-top: 30px;"><v-icon class="mr-3" icon="mdi-map-marker-circle"
                                style="font-size: 30px; color: #a9a9a9;"></v-icon> Colombia
                            - Antioquia</p>
                        <p class="text-white" style="margin-top: 40px;"> <v-icon class="mr-3" icon="mdi-email-check-outline"
                                style="font-size: 30px; color: #a9a9a9 " />
                            Juliocace21@gmail.com</p>
                    </div>
                    <div class="mt-5"
                        style="padding: 20px; margin-bottom: 20px; display: flex; justify-content: flex-start;">
                        <v-btn icon="mdi-linkedin" variant="text" color="white" style="font-size: 30px;"
                            href="https://www.linkedin.com/in/julio-cesar-roma%C3%B1a-caceres-2040aa19a/"
                            target="_blank"></v-btn>
                        <v-btn icon="mdi-instagram" variant="text" color="white" style="font-size: 30px;"
                            href="https://www.instagram.com/juliocaceres___/" target="_blank"></v-btn>
                    </div>

                </div>
            </v-col>
        </v-row>
    
    </v-container>
</template>

<script>
import emailjs from 'emailjs-com';
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue';

export default {
    setup() {
        const snackbar = ref({
            text: '',
            color: '',
            icon: '',
            snack: false
        })
        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 3) return true

                    return 'Nombre no valido'
                },
                email(value) {
                    if (/^[a-z.0-9]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Email invalido'
                },
                company(value) {
                    if (value?.length < 0) return true

                    return true
                },
                message(value) {
                    if (value?.length > 0) return true

                    return 'Mensaje Requerido'
                },
            },
        })
        const name = useField('name')
        const email = useField('email')
        const company = useField('company')
        const message = useField('message')
        const send = ref(false)
        const sendEmail = async (e) => {
            await submit()
            if (send.value) {
                emailjs.sendForm('service_qart0bm', 'template_470sv7g', e.target, '16WuS-TshGSufjfYt')
                    .then((response) => {
                        snackbar.value.text = 'Mensaje Enviado'
                        snackbar.value.icon = 'mdi-checkbox-marked-circle'
                        snackbar.value.color = 'blue-accent-4'
                        snackbar.value.snack = true
                        console.log('Envio Exitoso', response)
                        handleReset()
                    }).catch((error) => {
                        snackbar.value.text = 'Error al enviar'
                        snackbar.value.icon = 'mdi-cancel'
                        snackbar.value.color = 'red'
                        snackbar.value.snack = true
                        console.log('Envio Fallido', error)
                    })
                send.value = false
            }
        }
        const submit = handleSubmit(() => {
            send.value = true
        })
        return { name, email, message, company, sendEmail, snackbar }
    },






}
</script>

<style></style>