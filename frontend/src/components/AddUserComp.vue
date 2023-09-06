<template>
    <div>
        <div class="button">
            <a 
            data-bs-toggle = "modal"
            data-bs-target = "#add-user-modal"
            href="#add-user-modal"
            class=""
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
                        
                        </form>
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
            addingUserID: null, 
            model:{
                user: {
                    firstName: "",
                    lastName: "", 
                    email: "",
                    userProfile: "",
                    userRole: "",
                    userPassword: ""
                }
            }
        }
    },
    methods: {
        addUser(){
            this.$store.dispatch("register", this.model.user);
            console.log(this.model.user);
            setTimeout(() => {
            location.reload();
            }, 50000);
        }
    }
}
</script>