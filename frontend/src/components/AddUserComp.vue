<template>
    <div>
        <div class="button">
            <a 
            data-bs-toggle = "modal"
            data-bs-target = "#add-user-modal"
            href="#add-user-modal"
            class="button1"
            >Add User</a>
        </div>

        <div class="modal" id="add-user-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1>Register: </h1>
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div>
                        <form class="card">
                            <div>
                                <label for="firstName" class="form-label">First Name</label>
                                <input 
                                v-model="model.user.firstName"
                                type="text"
                                id="firstName"
                                name="firstName"
                                class="form-control"
                                />
                                <label for="lastName" class="form-label">Last Name</label>
                                <input 
                                v-model="model.user.lastName"
                                type="text"
                                id="lastName"
                                name="lastName"
                                class="form-control"
                                />
                                <label for="email" class="form-label">Email</label>
                                <input 
                                v-model="model.user.email"
                                type="text"
                                id="email"
                                name="email"
                                class="form-control"
                                />
                                <label for="userProfile" class="form-label">userProfile</label>
                                <input 
                                v-model="model.user.userProfile"
                                type="text"
                                id="userProfile"
                                name="userProfile"
                                class="form-control"
                                />
                                <label for="userRole" class="form-label">userRole</label>
                                <input 
                                v-model="model.user.userRole"
                                type="text"
                                id="userRole"
                                name="userRole"
                                class="form-control"
                                />
                                <label for="userPassword" class="form-label">userPassword</label>
                                <input 
                                v-model="model.user.userPassword"
                                type="text"
                                id="userPassword"
                                name="userPassword"
                                class="form-control"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <div class="p-3 text-center">
                            <button
                            type="submit"
                            class="btn m-2 add-btn text-font"
                            @click="addUser()"
                            >
                            Register!
                            </button>
                            <button type="reset" class="btn m-2 clr-btn text-font">
                            Clear Fields
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            model:{
                user: {
                    firstName: "",
                    lastName: "", 
                    email: "",
                    userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
                    userRole: "",
                    userPassword: ""
                }
            }
        }
    },
    methods: {
        addUser(){
            this.$store.dispatch("register", this.model.user)
            .then(() => {
                this.$router.push({name: "admin"});
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }
}
</script>

<style scoped>
.button1{
    color: #ffbf00;
}
</style>