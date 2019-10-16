
var v = new Vue({
    el: '#app',

    data:{
      url:'http://127.0.0.1:8000',
      showPickUp:false,
      selectedValue:'',
      databooking:[],
      booking: {
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
          var formData = v.formData(v.booking)
            axios.post(this.url+'/createbooking', this.booking)
            .then(response => {
              console.log(response);
              this.booking = response.data;
              window.history.back()
        })
        .catch(e => {
          this.errors.push(e)
          })
    },
    updateData(){
            var formData = v.formData(v.editBooking); 
            axios.put(this.url+"/updatedata", formData).then(function(response){
                if(response.data.error){
                    console.log('data error')
                }else{
                      console.log('data sukses')                
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
        }
    
  }
  //end create data booking
})