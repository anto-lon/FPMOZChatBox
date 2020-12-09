<template>
  <div class="about">

    <div class="motiv">
     <v-card
        elevation="2"
        class="pa-4 ma-5 text-center "
        color="white"
        outlined
        >
        <h3 class="text-h3 font-weight-thin mb-4  " style="color:#26c6da;" >Motiv</h3>
        <span class="font-weight-light ">U današnje vrijeme kada je svijet zahvatila pandemija COVIDA-19, 
          mnoge obrazovne ustanove su <br> primorane koristiti online način predavanja, stoga je komunikacija sa kolegama <br> izuzetna važna.
          U tome smo uvidjeli priliku za stvaranje ovog projekta,kako bi smo studentima raznih godina omogućili
          lakšu međusobnu komunikaciju, ova aplikacija će najviše poslužiti studentima prve godine "brucošima" koji se po prvi 
          susreću sa fakultetom i budućim kolegama..Kako bi lakše upoznali se jedni sa drugima i podjelili infomarcije jedni sa drugima </span>
      </v-card> 
    </div>

    <div class="moreInfo">
     <v-card
        elevation="2"
        class="pa-4 ma-5 text-center "
        color="#26c6da"
        outlined
        >
        <h3 class="text-h3 font-weight-thin mb-4  " style="color:white;" >Informacije o projektu</h3>
        <span class="font-weight-light ">Detaljnije informacije o projektu možete pronaći na sljedećem <a href="https://www.scribd.com/document/483819580/Fpmoz-Infotmatika-2020-Fpmoz-Chatbox" target="_blank">link</a></span>
        <br>
        <span class="font-weight-light ">Repozitorij projekta na github-u <a href="https://github.com/anto-lon/FPMOZChatBox" target="_blank">link</a></span>
      </v-card> 
    </div>

    <div>
     <v-card
        elevation="2"
        class="pa-4 ma-5 text-center "
        color="white"
        outlined
        >
        
        <h3 class="text-h3 font-weight-thin mb-4  " style="color:#26c6da;" >Tehnologije korištene za razvoj aplikacije</h3>
        
        <v-container>  
          <v-layout row wrap >
            <v-flex class="text-center photo">
              <img
              src="@/assets/html.png"
              width="180px"
              class="text-center ma-1"
              >

              <img
              src="@/assets/css.png"
              width="180px"
              class="text-center ma-1"
              >

              <img
              src="@/assets/firebase.png"
              width="180px"
              class="text-center ma-1"
              >

              <img
              src="@/assets/vue.png"
              width="180px"
              class="text-center ima-1"
              >

              <img
              src="@/assets/vuetfy.png"
              width="180px"
              class="text-center ma-1"
              >

              <img
              src="@/assets/node.png"
              width="180px"
              class="text-center ma-1"
              >

            </v-flex>
          </v-layout>
        </v-container>  
      </v-card> 
    </div>
    <div class="naslov">
      <v-container>
        <v-layout row wrap>
          <v-flex class="text-center">
            <h3 class="text-h3 font-weight-thin mb-4  " >Osobne zaslužne za razvoj aplikacije <br></h3>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="infoCards text-center">
      <v-container>
        <!-- Hrvoje card -->
        <v-layout row wrap >
          <v-flex xs12 sm12 md6 class="text-center text-sm-center mt-2">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://i.ibb.co/FDq9ZNm/hrvoje.png"
              >
                <v-card-title>Hrvoje Grubišić</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Student 3. godine FPMOZ-a
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Smjer: Informatika</div>

                <div>Kontakt: hrvoje.grubisic@fpmoz.sum.ba </div>
              </v-card-text>

            </v-card>     
            
          </v-flex>
          
          <v-flex xs12 sm12 md6 class="text-center text-sm-center mt-2">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://i.ibb.co/3Tg9cnh/antonio.png"
              >
                <v-card-title>Antonio Lončar</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Student 3. godine FPMOZ-a
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Smjer: Informatika</div>

                <div>Kontakt: antonio.lončar@fpmoz.sum.ba </div>
              </v-card-text>

            </v-card>     
            
          </v-flex>
        </v-layout>
        <br>

      </v-container>

      
    </div>

    
    <div class="blueLine"></div>
  </div>
</template>

<style>
.blueLine{
  height: 15px;
  background-color:#26c6da;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43); 
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.43);  
}
@media screen and (max-width: 600px) {
  .photo img{
  height: 140px;
  width: auto;
  }
}
@media screen and (max-width: 420px) {
  .photo img{
  height: 90px;
  width: auto;
  }
}
</style>