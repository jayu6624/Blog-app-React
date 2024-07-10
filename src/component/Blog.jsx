import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogLogo, setBlogLogo] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const stripHtmlTags = (str) => {
    if (!str) return '';
    return str.replace(/<[^>]*>?/gm, '');
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const cleanedDescription = stripHtmlTags(description);

    const bloginfo = {
      blog_title: blogTitle,
      blog_logo: blogLogo,
      description: cleanedDescription,
    };

    console.log(bloginfo);
    try {
      const res = await axios.post('http://localhost:3000/api/create', bloginfo);
      localStorage.setItem('blogs', JSON.stringify(res.data));
      setErrorMessage('');
      toast.success('Blog created successfully');
      // Reset form fields
      setBlogTitle('');
      setBlogLogo('');
      setDescription('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Blog already exists');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Toaster />
      <main className="container mx-auto py-8">
        <div className="m-auto container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16">
          <div className="w-full md:max-w-[80%] md:order-2 order-1 m-auto border-2 rounded-xl border-slate-600 p-6 mt-10">
            <div className="mb-3">
              <h3 className="font-bold text-2xl text-center">Create Blog</h3>
            </div>
            <form onSubmit={onSubmit} action='/blog'>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="blogTitle">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="blogTitle"
                  placeholder="Enter Title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="blogLogo">
                  Blog Logo URL
                </label>
                <input
                  type="text"
                  id="blogLogo"
                  value={blogLogo}
                  placeholder="Enter a URL"
                  onChange={(e) => setBlogLogo(e.target.value)}
                  className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <Editor
                  apiKey="usj415dth9clqfbc4sdz828sc1tr5tnvgandwb2u9mvarjb2"
                  value={description}
                  onEditorChange={(content) => setDescription(content)}
                  init={{
                    plugins:
                      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                    toolbar:
                      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                      { value: 'First.Name', title: 'First Name' },
                      { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject('See docs to implement AI Assistant')
                      ),
                    initialValue: '' // Set initial value to empty string
                  }}
                />
              </div>
              <div className='flex items-center justify-between'>
              
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              
            
                <Link to={"/blog"}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  back
                </Link>
              </div>
              
              {errorMessage && (
                <p className="text-red-500 text-xs italic mt-4">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
