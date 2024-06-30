import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Blog() {
  return (
    <div className=" m-auto  container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16">
      <div className="w-full md: max-w-[80%] md:order-2 order-1 m-auto bg-slate-500 p-6 mt-10" >
        
        <div className='mb-3 '> <h3>Create Blog</h3></div>
           
    <Editor
      apiKey='usj415dth9clqfbc4sdz828sc1tr5tnvgandwb2u9mvarjb2'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
    />
    </div>
    </div>
    
  );
}