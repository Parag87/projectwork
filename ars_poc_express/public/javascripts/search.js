$(document).ready(function() {
  $body = $("body");
      $('h3.Topic').click(function () {
          //$(this).next().toggle(300);
         $(this).next().toggle(300);
         //$(this).next().slideToggle();
      });
      // $('#ExpandAll').click(function () {
      //   $('#webServiceContainer').children('div.TopicContents').show(300).children('div.answer').show(300);
      // });
      // $('#CollapseAll').click(function () {
      //   $('#webServiceContainer').children('div.TopicContents').hide(300).children('div.answer').hide();
      // });
      jQuery.expr[':'].Contains = function (a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
      };

      $('#webServiceSearch').keyup(function () {
        var searchTerm = $("#webServiceSearch").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
         }
       });

       $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
          $(this).attr('visible','false');
        });

      $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','true');
        $('.panel-title a').removeClass('collapsed');
        $('.panel-title a aria-expanded').attr("aria-expanded","true");
        $('.panel-collapse.collapse').addClass('in');
        $('#ConsumerApp').attr("aria-expanded","true");
      });

      var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');
        console.log('jobCount',jobCount);
      if(jobCount == '0') {
        $('.no-result').show();$(this).addClass('collapsed');
          console.log("Here");
        // $('.panel-title a').addClass('collapsed');
        // $('.panel-title a aria-expanded').attr("aria-expanded","false");
        // $('.panel-collapse.collapse').removeClass('in');
        // $('#ConsumerApp').attr("aria-expanded","false");
      }
      else {
        $('.no-result').hide();
      }
      });
      $('#back').click(function () {
        $("#resultSet").html('');
        $("#resultSet").empty();
        $("#dataResult").css("display", "none");
        $("#webServiceContainer").css("display", "block");
        $("#webServiceSearch").removeAttr('disabled');
      });
});

$(function () {
  $('.clickable-row').click(function () {
      var dataSplit = $(this).data("href").split("$")
      $("#resultSet").html('');
      $("#resultSet").empty();
       $body.addClass("loading");
         $.ajax({
             url: "/page",
             type: "POST",
             dataType: "json",
             data: {serviceURL: dataSplit[2]},
             complete: function() {
               console.log('process complete');

             },
            success: function(data) {
              $body.removeClass("loading");
               $("#resultSet").append("<tr><td><div>"+ dataSplit[0] +"</div></td><td>"+ dataSplit[1] +"</td><td><img id='ok-success' src='images/success.png' /></td><td>"+ data.responseTime +"ms</td></tr>");
               $("#dataResult").css("display", "block");
               $("#webServiceContainer").css("display", "none");
               $("#webServiceSearch").attr('disabled','disabled');
            },
            error: function() {
              $body.removeClass("loading");
              $("#resultSet").append("<tr><td><div>"+ dataSplit[0] +"</abc></td><td>"+ dataSplit[1] +"</td><td><img id='ok-fail' src='images/fail.png' /></td><td>"+ data.responseTime +"ms</td></tr>");
              $("#dataResult").css("display", "block");
              $("#webServiceContainer").css("display", "none");
              $("#webServiceSearch").attr('disabled','disabled');
             },
          });
    });
    });
