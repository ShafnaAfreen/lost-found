var API_ENDPOINT = "https://kt3kc0c64g.execute-api.eu-north-1.amazonaws.com/prod"; 

document.getElementById("showItemsBtn").onclick = function() {  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            // Clear existing table rows
            $('#foundItemsTable tbody').empty();

            if (response.length === 0) {
                $('#foundItemsTable tbody').append("<tr><td colspan='5' class='text-center text-gray-500'>No found items reported yet.</td></tr>");
                return;
            }

            // Populate table with response data
            $.each(response, function(i, data) {          
                $("#foundItemsTable tbody").append(`
                    <tr class="border-b">
                        <td class="px-4 py-2">${data['name'] || 'N/A'}</td>
                        <td class="px-4 py-2">${data['location'] || 'Unknown'}</td>
                        <td class="px-4 py-2">${data['date'] || 'Not Specified'}</td>
                        <td class="px-4 py-2">${data['remarks'] || 'No remarks'}</td>
                        <td class="px-4 py-2">${data["contact"] || "No Contact Info"}</td>
                    </tr>
                `);
            });
        },
        error: function() {
            alert("Error retrieving found items.");
        }
    });
};
