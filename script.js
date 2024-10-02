$(() => {
    fetch("data.json")
    .then((rawData) => rawData.json())
    .then(data => {
        const semlevels = [
            "First Year, First Semester",
            "First Year, Second Semester",
            "Second Year, First Semester",
            "Second Year, Second Semester",
            "Third Year, First Semester",
            "Third Year, Second Semester",
            "Fourth Year, First Semester",
            "Fourth Year, Second Semester"
        ];

        // semester header
        semlevels.forEach((semesterTitle, index) => {
            $("#table-data").append(`
                <tr class="semester-header">
                    <td colspan="7">${semesterTitle}</td>
                </tr>
                <tr class="semester-header">
                    <th>Course</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                    <th>Course</th>
                    <th>Term</th>
                </tr>
            `);
            
            // background color for remarks
            data.forEach(course => {
                if (course.sem == index) {
                    let rowClass = "";
                    if (course.remarks === "Passed") {
                        rowClass = "passed";
                    } else if (course.remarks === "In progress") {
                        rowClass = "in-progress";
                    }
                    
                    // course data
                    $("#table-data").append(`
                        <tr class="line-color ${rowClass}">
                            <td>${course.course}</td>
                            <td>${course.desc}</td>
                            <td>${course.unit}</td>
                            <td>${course.grade}</td>
                            <td>${course.remarks}</td>
                            <td>${course.course}</td>
                            <td>${course.term}</td>
                        </tr>
                    `);
                }
            });
        });
    });
});
