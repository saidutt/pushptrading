// $(document).ready(function(){
//   $( ".widthInFt" ).change(function() {
//     $items = $('.widthInFt').val();
//     $weightitem = $('.weightitem').val();
//
//     $totalweight = (($items * $weightitem)/1000);
//
//    $('.totalweight').val($totalweight);
//   });
//
//
// });




    $(document).ready(function(){

      //Settings
      //weight
    $stripWeight18 = 363;
    $stripWeight19 = 303;
    $stripWeight20 = 272;
    $stripWeight21 = 242;

    $stripsPerFt = 4;
    //Cost
    $stripCost = 57;
    $springCost = 80;
    $bracketCost = 45;
    $lBendCost = 65;
    $bottomCost = 58;
    $guideCost = 58;
    $pipeCost = 54;
    $barringCost = 80;
    $barringDrumCost = 230;
    $sideLockCost = 230;
    $centerLockCost = 600;

    //initiation
    $totalStripAmount= 0;
    $totalSpringAmount= 0;
    $totalBracketAmount= 0;
    $totalLBendAmount= 0;
    $totalBottomAmount= 0;
    $totalGuideAmount= 0;
    $totalPipeAmount= 0;
    $totalBarringAmount= 0;
    $totalBarringDrumAmount= 0;
    $totalSideLockAmount = 0;
    $totalCenterLockAmount = 0;
    $stripWeight = 0;

    // switch(x){
    //   case 18: $stripWeight = $stripWeight18;
    //             Break;
    //   case 19: $stripWeight = $stripWeight19;
    //             Break;
    //   case 20: $stripWeight = $stripWeight20;
    //             Break;
    //   case 21: $stripWeight = $stripWeight21;
    //             Break;
    // }


    $('.stripCost').val($stripCost);
    $('.springCost').val($springCost);
    $('.bracketCost').val($bracketCost);
    $('.lBendCost').val($lBendCost);
    $('.bottomCost').val($bottomCost);
    $('.guideCost').val($guideCost);
    $('.pipeCost').val($pipeCost);
    $('.barringCost').val($barringCost);
    $('.barringDrumCost').val($barringDrumCost);
    $('.sideLockCost').val($sideLockCost);
    $('.centerLockCost').val($centerLockCost);

    //Strip Selection
    $( "#stripType" ).change(function() {
      // alert(this.value);
      $x=this.value;
      if($x==18){
        $stripWeight = $stripWeight18;
        stripCalc($stripWeight);
        // alert($y);
      }
      if($x==19){
        $stripWeight = $stripWeight19;
        stripCalc($stripWeight);
      }
      if($x==20){
        $stripWeight = $stripWeight20;
        stripCalc($stripWeight);
      }
      if($x==21){
        $stripWeight = $stripWeight21;
        stripCalc($stripWeight);
      }
    });

    function stripCalc($stripWeight){
      $numberOfStrips = $stripsPerFt * ($('.heightInput').val());
     $('.numberOfStrips').val($numberOfStrips);
     $weightOfEachStrip = ($stripWeight * $width)/1000;
     $('.weightOfEachStrip').val($weightOfEachStrip);
     $totalStripweight = $numberOfStrips * $weightOfEachStrip;
     $('.totalStripweight').val($totalStripweight);
     $totalStripAmount = ($stripCost * $totalStripweight);
     $totalStripAmount =$totalStripAmount.toFixed(2);
     $('.totalStripAmount').val($totalStripAmount);

    }

    //Bottom Calc Function
    function bottomCalc(){
      $totalBottomWeight = ($width * $('.buttomWeight').val())/1000;
      $('.totalBottomWeight').val($totalBottomWeight);
      $totalBottomAmount = ($bottomCost * $totalBottomWeight).toFixed(2);
      $('.totalBottomAmount').val($totalBottomAmount);
    }


    //Bottom Calc Function
    function guideCalc(){
      $totalGuideWeight = ($height * $('.guideWeight').val())/1000;
      $('.totalGuideWeight').val($totalGuideWeight);
      $totalGuideAmount = ($guideCost * $totalGuideWeight).toFixed(2);
      $('.totalGuideAmount').val($totalGuideAmount);

    }

    //Bottom Calc Function
    function pipeCalc(){
      $totalPipeWeight = ($width * $('.pipeWeight').val())/1000;
      $('.totalPipeWeight').val($totalPipeWeight);
      $totalPipeAmount = ($pipeCost * $totalPipeWeight).toFixed(2);
      $('.totalPipeAmount').val($totalPipeAmount);
    }

    //Bottom Calc Function
    function springCalc(){
      $springQuantity = $('.springQuantity').val();
      $totalSpringAmount = ($springCost * $springQuantity);
      $('.totalSpringAmount').val($totalSpringAmount);
    }

    //Bottom Calc Function
    function bracketCalc(){
      $bracketQuantity = $('.bracketQuantity').val();
      $totalBracketAmount = ($bracketCost * $bracketQuantity);
      $('.totalBracketAmount').val($totalBracketAmount);
    }

    //Bottom Calc Function
    function lBendCalc(){
      $lBendQuantity = $('.lBendQuantity').val();
      $totalLBendAmount = ($lBendCost * $lBendQuantity);
      $('.totalLBendAmount').val($totalLBendAmount);
    }

    //Bottom Calc Function
    function barringCalc(){
      $barringQuantity = $('.barringQuantity').val();
      $totalBarringAmount = ($barringCost * $barringQuantity);
      $('.totalBarringAmount').val($totalBarringAmount);
    }

    //Bottom Calc Function
    function barringDrumCalc(){
      $barringDrumQuantity = $('.barringDrumQuantity').val();
      $totalBarringDrumAmount = ($barringDrumCost * $barringDrumQuantity);
      $('.totalBarringDrumAmount').val($totalBarringDrumAmount);
    }

    //Bottom Calc Function
    function sideLockCalc(){
      $sideLockQuantity = $('.sideLockQuantity').val();
      $totalSideLockAmount = ($sideLockCost * $sideLockQuantity);
      $('.totalSideLockAmount').val($totalSideLockAmount);
    }

    //Bottom Calc Function
    function centerLockCalc(){
      $centerLockQuantity = $('.centerLockQuantity').val();
      $totalCenterLockAmount = ($centerLockCost * $centerLockQuantity);
      $('.totalCenterLockAmount').val($totalCenterLockAmount);
    }


    //fill width and height of shutter
  $( ".widthInput, .heightInput" ).change(function() {
    $width = $('.widthInput').val();
    $height = $('.heightInput').val();
    $('.widthInFt').val($width);
    $('.heightInFt').val($height);

    //Strip Calc
    stripCalc($stripWeight);

   //Bottom Clac
   bottomCalc();

   //Guide Clac
   guideCalc();

   //Pipe Clac
   pipeCalc();

  });

  //Spring Calc
  $( ".springQuantity" ).change(function() {
    springCalc();
  });

  //Bracket Calc
  $( ".bracketQuantity" ).change(function() {
    bracketCalc();
  });

  //L. Bend Calc
  $( ".lBendQuantity" ).change(function() {
    lBendCalc();
  });

  //Barring Calc
  $( ".barringQuantity" ).change(function() {
    barringCalc();
  });

  //Barring Drum Calc
  $( ".barringDrumQuantity" ).change(function() {
    barringDrumCalc();
  });

  //Side Lock Calc
  $( ".sideLockQuantity" ).change(function() {
    sideLockCalc();
  });

  //Center Lock Calc
  $( ".centerLockQuantity" ).change(function() {
    centerLockCalc();
  });

  // if($("#stripCheck").prop('checked') == true){
  //   $('.totalStripAmount').val($totalStripAmount);
  // }
  // else{
  //   $('.totalStripAmount').val(0);
  // }


// //Total Calc
// $( ".totalStripAmount, .totalSpringAmount, .totalBracketAmount, .totalLBendAmount, .totalBottomAmount, .totalGuideAmount, .totalPipeAmount, .totalBarringAmount, .totalBarringDrumAmount, .totalSideLockAmount, .totalCenterLockAmount " ).change(function() {
//  $totalAmount = $totalStripAmount + $totalSpringAmount + $totalBracketAmount + $totalLBendAmount + $totalBottomAmount + $totalGuideAmount + $totalPipeAmount + $totalBarringAmount + $totalBarringDrumAmount + $totalSideLockAmount + $totalCenterLockAmount;
//  $('.totalAmount').val($totalAmount);
// });


//Center Lock Calc
$( "input[type='number']" ).change(function() {
  $totalAmount = parseFloat($totalStripAmount) + parseFloat($totalSpringAmount) + parseFloat($totalBracketAmount) + parseFloat($totalLBendAmount) + parseFloat($totalBottomAmount) + parseFloat($totalGuideAmount) + parseFloat($totalPipeAmount) + parseFloat($totalBarringAmount) + parseFloat($totalBarringDrumAmount) + parseFloat($totalSideLockAmount) + parseFloat($totalCenterLockAmount);
  $totalAmount =$totalAmount.toFixed(2);
  $('.totalAmount').val($totalAmount);
});


});
