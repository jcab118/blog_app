$(document).ready(function(){
  $('#blog-form').on('submit', function(e){
    e.preventDefault();
    var blogTitle = $('title-text').val();
    var blogPost = $('blog_post').val();
    var blogObj = {blogTitle: blogTitle, blogPost: blogPost};
    var newRow, blogTitleTr, blogPostTr;
    $.ajax({
      method: 'POST',
      url:'/blog_post',
      data: JSON.stringify(blogObj),
      contentType:'application/json',
      dataType:'json',
      success:function(results) {
        newRow = $('<tr>')
        blogTitle = $("<tr>");
        blogPost = $('<tr>');
        newRow.append(blogTitleTr).append(blogPostTr);
        $('#blog_object').append(newRow);
        $('title-text').val("");
        $('blog_post').val("");
      }
    });
  });
  $.ajax({
    method:"GET",
    url:'/blog_page',
  }).then (function(res){
    console.log(res)
    var newRow, blogTitleTr, blogPostTr;
    for(var i = 0; i < res.length; i++) {
      newRow = $('<tr>')
      blogTitleTd = $('<tr>');
      blogPostTd = $('<tr>');
      blogTitleTr.text(res[i].blogTitle);
      blogPostTr.text(res[i].blogPost);
      newRow.append(blogTitleTr).append(blogPostTr);
      $('#blog_object').append(newRow)
    }
  });
});
