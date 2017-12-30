var employees = [
				{"eid" : "emp1", "ename" : "Chandrakanth", "salary" : 80000},
				{"eid" : "emp2", "ename" : "Harsha", "salary" : 90000},
				{"eid" : "emp3", "ename" : "Manoj", "salary" : 100000},
				{"eid" : "emp4", "ename" : "Sowjanya", "salary" : 110000},
				{"eid" : "emp5", "ename" : "Mounika", "salary" : 120000},				
];
	$(document).ready(function()
	{
		$.each(employees, function(index, value)
		{

			$("#add").append("<tr>" +"<th>" +value.eid+ "</th>" + "</tr>");
			$("#add").append("<tr>" +"<td>" +value.ename+ "</td>" + "</tr>");
			$("#add").append("<tr>" +"<td>" +value.salary+ "</td>" + "</tr>");
		});
		$.each(employees, function(index, value)
		{
			employees.push();
			employees.push(value);
		})
	});