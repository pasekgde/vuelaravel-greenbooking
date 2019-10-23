
var v = new Vue({
    el: '#app',

    data:{
      url:'http://127.0.0.1:8000',
      showPickUp:false,
      selectedValue:'',
      databooking:[],
      booking: {
        id :'',
        fullname:'',
        country:'Indonesia',
        date:'',
        package:'Single Ride Adventure',
        person:'1pax',
        pickup:'No. Thanks',
        pickuparea:'',
        contact:'',
        food:'',
      },
      editBooking:{},
      errors: [],
    },
    created(){
      this.showData(); 
    },
    
   methods:{
   showData() {
      axios.get(this.url+'/showbooking', this.databooking)
      .then(response => {
        this.databooking = response.data
        console.log(this.databooking);
      })
      .catch(e => {
        this.errors.push(e)
      }) 
    },

  	createdData() {
            axios.post(this.url+'/createbooking', this.booking)
            .then(response => {
              console.log(response);
              this.msgSuccess();
              this.booking = response.data;
              location.href = "booking";
        })
        .catch(e => {
          this.errors.push(e)
          })
    },
    updateData(editBooking){ 
            axios.put(this.url+"/updatedata/" + editBooking.id, this.editBooking)
            .then(function(response){
                if(response.data.error){
                  v.msgError();
                  console.log(response.data.error)
                }else{
                  v.msgSuccess();
                  $('#editModal').modal('hide')                                      
                }
            })
        },
    deleteData(editBooking){ 
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            axios.delete(this.url+"/deletedata/" + editBooking.id, this.editBooking)
            this.msgDeleteSuccess();
            this.showData();
          }
        })
      },
    formData(obj) {
      var formData = new FormData();
            for (var key in obj) {
                formData.append(key, obj[key]);
            }
            return formData;
        },
    checkValueSelect(){
        this.selectedValue = event.target.value;
        if((this.selectedValue === 'Ubud') || (this.selectedValue === 'Nusa Dua/Jimbaran') || (this.selectedValue == 'Kuta Seminyak Area')){
            this.showPickUp = true
        }else{
            this.showPickUp = false
        }
    },
    selectBooking(book){
            v.editBooking = book;
            console.log(v.editBooking);
        },



    //khusus msg
    msgSuccess(){
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },
    msgError(){
      Swal.fire({
        position: 'center',
        type: 'error',
        title: 'Opss..',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500
      })
    },
    msgDeleteSuccess(){
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  }
  //end create data booking
})