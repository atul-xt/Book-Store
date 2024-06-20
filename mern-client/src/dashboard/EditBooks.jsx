import React, { useEffect } from 'react'
import { Button, Textarea , Label, Select, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {

  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL} = useLoaderData();
  const bookCategories = [
    'None of the above',
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Horror',
    'Romance',
    'Thriller',
    'Adventure',
    'Biography',
    'Autobiography',
    'History',
    'Poetry',
    'Comics',
    'Art',
    'Cookbooks',
    'Diaries',
    'Journals',
    'Prayer books',
    'Series',
    'Trilogy',
    'Self-Help',
    'Guide',
    'Travel',
    'Health',
    'Fitness',
    'Yoga',
    'Meditation',
    'Spirituality',
    'Religion',
    'Philosophy',
    'Psychology',
    'Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Geology',
    'Astronomy',
    'Engineering',
    'Computer Science',
    'Programming',
    'Software Development',
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science',
  ]

  const [selectedCategories, setSelectedCategories] = useState(bookCategories[0]);

  const handleCategoryChange = (e) => {
    setSelectedCategories(e.target.value);
  }
  
  //handle book submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfURL
    }

    try {
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateBookObj)
      })

      const data = await response.json();
      alert("Book updated successfully !!!");
      
    } catch (error) {
      console.log(error);
    }
}

  return (
    <div className='px-4 my-4'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[900px] flex-col flex-wrap gap-4 bg-gray-300 rounded-2xl p-6">
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput defaultValue={bookTitle} id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput defaultValue={authorName} id="authorName" name='authorName' type="text" placeholder="Author name" required />
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput defaultValue={imageURL} id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required />
        </div>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select defaultValue={category} id='inputState' name='categoryName' className='w-full rounded' onChange={handleCategoryChange}>
            {bookCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </Select>
        </div>
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea defaultValue={bookDescription} id="bookDescription" placeholder="Write your book description..." required rows={5} className='w-full'/>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book PDF URL" />
        </div>
        <TextInput defaultValue={bookPdfURL} id="bookPdfURL" name='bookPdfURL' type="text" placeholder="Book pdf URL" required />
      </div>
      <Button className='mt-5 bg-blue-700 text-white font-semibold mx-auto rounded hover:bg-black transition-all duration-300' type="submit">Update Book</Button>
    </form>

    </div>
  )
}

export default EditBooks