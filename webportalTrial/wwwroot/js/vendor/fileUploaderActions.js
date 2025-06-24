////The code below will allow the user to select and 
////upload chosen files to designated section 
//    function getFileUploaderInstance() {

//        return $("#file-uploader").dxFileUploader("instance");

//    }
////
//    function fileUploader_valueChanged(e) {

//        $("#file-uploader").dxFileUploader("instance").option("buttons", {

//            upload: false,

//            cancel: true

//        });

//    }

// Function to get the instance of a specific file uploader by its ID
function getFileUploaderInstance(uploaderId) {
    return $(`#${uploaderId}`).dxFileUploader("instance");
}

// Function to handle the valueChanged event for any file uploader
function fileUploader_valueChanged(e, uploaderId) {
    const uploaderInstance = getFileUploaderInstance(uploaderId);
    uploaderInstance.option("buttons", {
        upload: false,
        cancel: true
    });
}

// Attach event listeners dynamically to all file uploaders
$(document).ready(function () {
    $(".file-uploader").each(function () {
        const uploaderId = $(this).attr("id");
        const uploaderInstance = getFileUploaderInstance(uploaderId);

        // Attach the valueChanged event handler
        uploaderInstance.on("valueChanged", function (e) {
            fileUploader_valueChanged(e, uploaderId);
        });
    });
});
