// Enable CORS globally for any host
// var corsAttr = new EnableCorsAttribute("*", "*", "*");
// config.EnableCors(corsAttr);


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


// function readURL(input) {
//   if (input.files && input.files[0]) {
//     console.log(input.files[0]);
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       $('#output-img')
//         .attr('src', e.target.result);
//         // .width(150)
//         // .height(200);
//     };
//     reader.readAsDataURL(input.files[0]);
//   }
// }


// $("#uploaded-img").change(function(){
//     let reader = new FileReader();
//     reader.onload = function() {
//         let dataURL = reader.result;
//         $("#output-img").attr("src", dataURL);
//         $("#output-img").empty();
//     }
//     let file = $("#uploaded-img").prop('files')[0];
//     reader.readAsDataURL(file);
// })

// let model;
// $(document).ready(async function(){
//     $('.progress-bar').show();
//     model = await tf.loadLayersModel('covid_js_model/model.json');
//     $('.progress-bar').hide();
// });

// $("#submit").on('clicked', async function(){
//     let image = $('#output-img').get(0);
//     let tensor = tf.browser.fromPixels(images)
//         .resizeNearestNeighbour([300,300])
//         .toFloat()
//         .div(tf.scalar(255.0))
//         .expandDims();

//     let predictions = await model.predict(tensor).data();

//     console.log(predictions);

//     // let result = Array.from(predictions)
//     //     .map(function(p,i){
//     //         return {
//     //             probality: p,
//     //             className: TARGET_CLASSES[i]
//     //         }
//     //     }).sort()
// })