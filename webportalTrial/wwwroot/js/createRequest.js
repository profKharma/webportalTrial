document.addEventListener("DOMContentLoaded", function () {
    const reqType = document.getElementById("reqTypeSelect");
    console.log("reqType:", reqType);

    const divs = {
        postInfo: ["Classification Schedule Template", "Temporary Post No/MyHR+ Schedule Request", "Post Audit", "Job Analysis", "Job Evaluation"],
        empJobHolder: ["Temporary Post No/MyHR+ Schedule Request", "Post Audit", "Job Analysis", "Job Evaluation"],
        classification: ["Classification Schedule Template"],
        estabReq: ["Establishment Request"],
        recReq: ["Reconciliation Request"],
        myHr: ["Temporary Post No/MyHR+ Schedule Request"],
        postAudit: ["Post Audit"],
        orgRev: ["Organizational Review/Establishment Change"],
        jobAnalysis: ["Job Analysis", "Job Evaluation"],
        techAdvice: ["Technical Advice"],
        qltyControl: ["Quality Control Request (Internal Only)"],
        estabMaintenance: ["Establishment Maintenance (Internal Only)"]
    };

    function updateVisibility() {
        const selectedValue = reqType.value;
        console.log("Selected Value:", selectedValue);

        // Hide all divs by setting visibility to "hidden"
        Object.keys(divs).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.visibility = "hidden"; // Use visibility instead of display
                element.style.height = "0"; // attempt to prevent layout shift
            } else {
                console.warn("Element not found:", id);
            }
        });
    

        // Show relevant divs by setting visibility to "visible"
        Object.keys(divs).forEach(id => {
            if (divs[id].includes(selectedValue)) {
                const element = document.getElementById(id);
                if (element) {
                    element.style.visibility = "visible";
                    element.style.height = "auto"; // Restore height when visible
                }
            }
        });
    }

    if (reqType) {
        reqType.addEventListener("change", updateVisibility);
        updateVisibility(); // Initial call in case of pre-selected value
    } else {
        console.error("reqType element not found");
    }
});