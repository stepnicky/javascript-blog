'use strict';

// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /*[DONE] add class 'active' to the clicked link */
  console.log('clickedElement: ', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const href = clickedElement.getAttribute('href');
  console.log('Href: ', href);
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(href);
  console.log('correctArticle: ', correctArticle);
  /* [DONE] add class 'active' to the correct article */
  correctArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

const generateTitleLinks = function(){

  /* remove content of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  
  /* for each article */
  
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles){
    
    /* get the article id */

    const articleId = article.getAttribute('id');
    console.log('id: ', articleId);

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
    /* get the title from the title element */

    console.log('articleTitle: ', articleTitle);

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML: ', linkHTML);
    
    // /* insert link into titleList */

    // titleList.insertAdjacentHTML("beforeend", linkHTML);

    /* insert link into html variable */
    
    html += linkHTML;
    console.log('html: ', html);
  }
  
  /*  insert links into titleList */

  titleList.innerHTML = html;

  /* add event listeners */

  const links = document.querySelectorAll('.titles a');
  console.log('links: ', links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function generateTags(){
  
  /* find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every article: */
  
  for(let article of articles){
    
    /* find tags wrapper */
    
    let tagsWrapper = article.querySelector(optArticleTagsSelector);
    
    /* make html variable with empty string */
    
    let html = '';
    
    /* get tags from data-tags attribute */
    
    const dataTagsAttribute = article.getAttribute('data-tags');
    console.log('dataTagsAttribute: ', dataTagsAttribute);
    
    /* split tags into array */

    const dataTags = dataTagsAttribute.split(' ');
    console.log('dataTags: ', dataTags);

    /* START LOOP: for each tag */

    for(let dataTag of dataTags){

      /* generate HTML of the link */

      const tagHTML = '<li><a href="#tag-' + dataTag + '">' + dataTag + '</a></li> ';
      console.log('tagHTML: ', tagHTML);

      /* add generated code to html variable */

      html += tagHTML;
      console.log('html: ', html);

    /* END LOOP: for each tag */

    }

    /* insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  
  }
}

generateTags();

