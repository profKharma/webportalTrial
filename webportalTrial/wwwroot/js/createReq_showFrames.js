//toggling the up and down arrow
//document.addEventListener("DOMContentLoaded", function () {
//    document.querySelectorAll(".toggleBtn").forEach(function (button) {
//        button.addEventListener("click", function (event) {
//            event.preventDefault()
//            const icon = button.querySelector('.frame-icon');
//            const content = button.nextElementSibling;
//            content.classList.toggle("show");
//            icon.classList.toggle('rotated');
//        });
//    });
//});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggleBtn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const rotateIcon = button.querySelector(".rotate-icon"); // Select the rotate-icon
            const content = button.nextElementSibling; // Select the content to toggle
            if (content) {
                content.classList.toggle("show"); // Toggle visibility of the content
            }
            if (rotateIcon) {
                rotateIcon.classList.toggle("rotated"); // Toggle the rotated class
            }
        });
    });
});

//Hide the frames and show based on ReqType
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the visibility of divs based on the selected option
    function handleRequestTypeSelection(selectedOption) {
        // List of all divs to manage visibility
        const divs = [
            "postInfo",
            "empJobHolder",
            "classification",
            "estabReq",
            "recReq",
            "myHr",
            "postAudit",
            "orgRev",
            "techAdvice",
            "jobAnalysis"
        ];

        // Always make mdaDetesDiv visible
        const mdaDetesDiv = document.getElementById("mdaDetesDiv");
        if (mdaDetesDiv) {
            mdaDetesDiv.style.visibility = "visible";
            mdaDetesDiv.style.height = "auto";
            mdaDetesDiv.style.overflow = "visible";
        }

        // Hide all other divs initially
        divs.forEach(divId => {
            const div = document.getElementById(divId);
            if (div) {
                div.style.visibility = "hidden";
                div.style.height = "0";
                div.style.overflow = "hidden";
            }
        });

        // Logic to show specific divs based on the selected option
        if (["Classification Schedule Template", "Temporary Post No/MyHR+ Schedule Request", "Post Audit", "Job Evaluation"].includes(selectedOption)) {
            showDiv("postInfo");
        }
        if (["Temporary Post No/MyHR+ Schedule Request", "Post Audit", "Job Analysis", "Job Evaluation"].includes(selectedOption)) {
            showDiv("empJobHolder");
        }
        if (["Job Analysis", "Job Evaluation"].includes(selectedOption)) {
            showDiv("Job Analysis", "Job Evaluation");
        }
        if (selectedOption === "Classification Schedule Template Request (Internal Only)") {
            showDiv("classification");
        }

        if (selectedOption === "Establishment Request") {
            showDiv("estabReq");
        }
        if (selectedOption === "Reconciliation Request") {
            showDiv("recReq");
        }
        if (selectedOption === "Temp Post No/MyHR+ Schedule Request") {
            showDiv("myHr");
        }
        if (selectedOption === "Post Audit") {
            showDiv("postAudit");
        }
        if (selectedOption === "Organizational Review/Establishment Change") {
            showDiv("orgRev");
        }
        if (selectedOption === "Technical Advice") {
            showDiv("techAdvice");
        }
    }

    // Function to show a specific div
    function showDiv(divId) {
        const div = document.getElementById(divId);
        if (div) {
            div.style.visibility = "visible";
            div.style.height = "auto";
            div.style.overflow = "visible";
        }
    }

    // Hide all frames except mdaDetesDiv on page load
    function initializeFrames() {
        const divs = [
            "postInfo",
            "empJobHolder",
            "classification",
            "estabReq",
            "recReq",
            "myHr",
            "postAudit",
            "orgRev",
            "techAdvice",
            "jobAnalysis"
        ];

        // Always make mdaDetesDiv visible
        const mdaDetesDiv = document.getElementById("mdaDetesDiv");
        if (mdaDetesDiv) {
            mdaDetesDiv.style.visibility = "visible";
            mdaDetesDiv.style.height = "auto";
            mdaDetesDiv.style.overflow = "visible";
        }

        // Hide all other divs
        divs.forEach(divId => {
            const div = document.getElementById(divId);
            if (div) {
                div.style.visibility = "hidden";
                div.style.height = "0";
                div.style.overflow = "hidden";
            }
        });
    }

    // Add event listener to the ul with ID "reqType"
    const reqTypeSelect = document.getElementById("reqType");
    if (reqTypeSelect) {
        reqTypeSelect.addEventListener("click", function (event) {
            // Ensure the clicked element is a list item
            if (event.target && event.target.tagName === "LI") {
                const selectedOption = event.target.textContent.trim(); // Get the selected option text
                handleRequestTypeSelection(selectedOption); // Call the function to handle visibility
            }
        });
    }

    // Initialize frames on page load
    initializeFrames();
});


//////////////////////////////////////

//Js to delete frames

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to all delete icons
    document.querySelectorAll(".delete-icon").forEach(function (icon) {
        icon.addEventListener("click", function (event) {
            event.preventDefault();
            const frame = this.closest(".frameDiv"); // Find the closest frameDiv
            if (frame) {
                frame.remove(); // Remove the frame from the DOM
            }
        });
    });
});