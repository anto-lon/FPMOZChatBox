<template>
  <div>
    <!-- Cover photo -->
    <div class="parall">
      <v-parallax
        dark
        src="https://i.ibb.co/V302h11/paralla.png"
        id="parallax-img"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h3 class="text-h4 font-weight-thin mb-4 cyan lighten-1 headingText">“Communication – the human connection – is the key to personal and career success.”<br>
            <h6 class="subheading font-weight-bold ">Paul J. Meyer</h6></h3>

          </v-col>
        </v-row>
      </v-parallax>
    
    </div>
    
    <div class="vizija">
    <!-- O projektu -->
    

    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>


<style>
.parall{
  -webkit-box-shadow: 0px 14px 25px -14px rgba(0,0,0,0.84); 
  box-shadow: 0px 14px 25px -14px rgba(0,0,0,0.84);
  
}
.headingText{
  -webkit-box-shadow: 0px 1px 21px -5px rgba(0,0,0,0.83); 
  box-shadow: 0px 1px 21px -5px rgba(0,0,0,0.83);
}
.vizija{
  padding-top:20px ;
}

</style>