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
    <br>
    <div class="vizija">
    <!-- Naša vizija -->
      <v-container>
        <v-layout row wrap>
          <v-flex class="text-center">
            <h3 class="text-h3 font-weight-thin mb-4  " >Ovdje možete preuzeti našu viziju <br></h3>
            <v-btn class="ma-2" rounded outlined color="cyan lighten-1">
              <a style="text-decoration:none;color:cyan lighten-1;"href="https://www.scribd.com/document/483819580/Fpmoz-Infotmatika-2020-Fpmoz-Chatbox" target="_blank">Vizija</a>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

        <br><br>

      <!-- Bar sa fpmoz i sum linkovima -->  
      <div class="visitUs">
        <v-container>  
          <v-layout row wrap >
            <v-flex class="text-center">
              <h3 class="text-h3 font-weight-thin mb-4 white--text "  > Posjetite stranice FPMOZ-a i SUM-a</h3>
            </v-flex>
          </v-layout>


          <v-layout row wrap>
            <v-flex  xs12 sm12 md4 class="text-center text-sm-center" >
              <a href="https://www.facebook.com/fpmoz.ba" style="text-decoration:none;" target="_blank">
                <v-icon large color="white"> mdi-facebook  </v-icon>
                <span style="padding-left:5px;color:white">facebook.com/fpmoz.ba</span>
              </a>

              <br>

              <a href="https://www.instagram.com/fpmoz.mostar/" style="text-decoration:none;" target="_blank">
                <v-icon large color="white"> mdi-instagram  </v-icon>
                <span style="padding-left:5px;color:white">instagram.com/fpmoz.mostar/</span>
              </a>

              <br>

              <a href="https://www.fpmoz.sum.ba/" style="text-decoration:none;" target="_blank">
                <v-icon large color="white"> mdi-web  </v-icon>
                <span style="padding-left:5px;color:white">fpmoz.sum.ba/</span>
              </a>

            </v-flex>

            <v-flex  xs12 sm12 md4 class="text-center text-sm-center">
                <img src="https://i.ibb.co/PMRVRV7/logo.png" height="100px"alt="">
            </v-flex>

            <v-flex  xs12 sm12 md4 class= "text-center text-sm-center" >
              <a href="https://www.facebook.com/jednojeSveuciliste" style="text-decoration:none;" target="_blank">
                <span style="padding-left:5px;color:white">facebook.com/jednojeSveuciliste</span>
                <v-icon large color="white"> mdi-facebook  </v-icon>
              </a>

              <br>

              <a href="https://www.instagram.com/sveucilisteumostaru" style="text-decoration:none;" target="_blank">
                <span style="padding-left:5px;color:white">instagram.com/sveucilisteumostaru</span>
                <v-icon large color="white"> mdi-instagram  </v-icon>
              </a>

              <br>

              <a href="https://www.sum.ba/" style="text-decoration:none;" target="_blank">
                <span style="padding-left:5px;color:white">www.sum.ba</span>
                <v-icon large color="white"> mdi-web  </v-icon>
              </a>
                
            </v-flex>            

          </v-layout>
        </v-container>
      </div>
      <br><br>
      <!-- Naša vizija -->
      <v-container>
        <v-layout row wrap>
          <v-flex class="text-center">
            <h3 class="text-h3 font-weight-thin mb-4  " >Osobe koje su zaslužne za ovaj projekat , i više infomrmacije o projektu na sljedećem linku <br></h3>
            <v-btn class="ma-2" rounded outlined color="cyan lighten-1">
              <a style="text-decoration:none;color:cyan lighten-1;" href="/#/about" ><v-icon>mdi-information-outline</v-icon> About</a>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="blueLine">

      </div>
    
      
    

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
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
.visitUs{
  background-color:#26c6da;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43); 
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43);  
}
.blueLine{
  height: 15px;
  background-color:#26c6da;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43); 
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43);  
}
</style>