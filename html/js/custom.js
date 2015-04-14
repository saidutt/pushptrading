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



  $( ".widthInput, .heightInput" ).change(function() {
    $width = $('.widthInput').val();
    $height = $('.heightInput').val();
    $('.widthInFt').val($width);
    $('.heightInFt').val($height);

    //Strip Calc
    $numberOfStrips = 4 * ($('.heightInput').val());
   $('.numberOfStrips').val($numberOfStrips);
   $weightOfEachStrip = (363 * $width)/1000;
   $('.weightOfEachStrip').val($weightOfEachStrip);
   $totalStripweight = $numberOfStrips * $weightOfEachStrip;
   $('.totalStripweight').val($totalStripweight);
  //  $costOfStripKg = 57;
   $totalStripAmount = (57 * $totalStripweight);
   $('.totalStripAmount').val($totalStripAmount);

   //Bottom Clac
   $totalBottomWeight = ($width * $('.buttomWeight').val())/1000;
   $('.totalBottomWeight').val($totalBottomWeight);
   $totalBottomAmount = (58 * $totalBottomWeight).toFixed(2);
   $('.totalBottomAmount').val($totalBottomAmount);

   //Guide Clac
   $totalGuideWeight = ($height * $('.guideWeight').val())/1000;
   $('.totalGuideWeight').val($totalGuideWeight);
   $totalGuideAmount = (58 * $totalGuideWeight).toFixed(2);
   $('.totalGuideAmount').val($totalGuideAmount);

   //Pipe Clac
   $totalPipeWeight = ($width * $('.pipeWeight').val())/1000;
   $('.totalPipeWeight').val($totalPipeWeight);
   $totalPipeAmount = (54 * $totalPipeWeight).toFixed(2);
   $('.totalPipeAmount').val($totalPipeAmount);




  });


  //Spring Calc
  $( ".springQuantity" ).change(function() {
   $springQuantity = $('.springQuantity').val();
   $totalSpringAmount = (80 * $springQuantity);
   $('.totalSpringAmount').val($totalSpringAmount);
  });

  //Bracket Calc
  $( ".bracketQuantity" ).change(function() {
   $bracketQuantity = $('.bracketQuantity').val();
   $totalBracketAmount = (45 * $bracketQuantity);
   $('.totalBracketAmount').val($totalBracketAmount);
  });

  //L. Bend Calc
  $( ".lBendQuantity" ).change(function() {
   $lBendQuantity = $('.lBendQuantity').val();
   $totalLBendAmount = (65 * $lBendQuantity);
   $('.totalLBendAmount').val($totalLBendAmount);
  });






  //Barring Calc
  $( ".barringQuantity" ).change(function() {
   $barringQuantity = $('.barringQuantity').val();
   $totalBarringAmount = (80 * $barringQuantity);
   $('.totalBarringAmount').val($totalBarringAmount);
  });

  //Barring Drum Calc
  $( ".barringDrumQuantity" ).change(function() {
   $barringDrumQuantity = $('.barringDrumQuantity').val();
   $totalBarringDrumAmount = (230 * $barringDrumQuantity);
   $('.totalBarringDrumAmount').val($totalBarringDrumAmount);
  });

  //Side Lock Calc
  $( ".sideLockQuantity" ).change(function() {
   $sideLockQuantity = $('.sideLockQuantity').val();
   $totalSideLockAmount = (230 * $sideLockQuantity);
   $('.totalSideLockAmount').val($totalSideLockAmount);
  });

  //Center Lock Calc
  $( ".centerLockQuantity" ).change(function() {
   $centerLockQuantity = $('.centerLockQuantity').val();
   $totalCenterLockAmount = (600 * $centerLockQuantity);
   $('.totalCenterLockAmount').val($totalCenterLockAmount);
  });



// //Total Calc
// $( ".totalStripAmount, .totalSpringAmount, .totalBracketAmount, .totalLBendAmount, .totalBottomAmount, .totalGuideAmount, .totalPipeAmount, .totalBarringAmount, .totalBarringDrumAmount, .totalSideLockAmount, .totalCenterLockAmount " ).change(function() {
//  $totalAmount = $totalStripAmount + $totalSpringAmount + $totalBracketAmount + $totalLBendAmount + $totalBottomAmount + $totalGuideAmount + $totalPipeAmount + $totalBarringAmount + $totalBarringDrumAmount + $totalSideLockAmount + $totalCenterLockAmount;
//  $('.totalAmount').val($totalAmount);
// });


//Center Lock Calc
$( "input[type='number']" ).change(function() {
  $totalAmount = parseFloat($totalStripAmount) + parseFloat($totalSpringAmount) + parseFloat($totalBracketAmount) + parseFloat($totalLBendAmount) + parseFloat($totalBottomAmount) + parseFloat($totalGuideAmount) + parseFloat($totalPipeAmount) + parseFloat($totalBarringAmount) + parseFloat($totalBarringDrumAmount) + parseFloat($totalSideLockAmount) + parseFloat($totalCenterLockAmount);
  $('.totalAmount').val($totalAmount);
});


});
