import React from 'react'
import { Button, Textarea , Label, Select, TextInput } from 'flowbite-react'
import { useState } from 'react'

const UploadBook = () => {
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
  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfURL
    }
    console.log(bookObj);

    try {
      const response = await fetch('http://localhost:5000/upload-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookObj)
      })

      const data = await response.json();
      alert("Book uploaded successfully !!!");
      form.reset();
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 bg-gray-300 rounded-2xl p-10">
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" defaultValue="by " name='authorName' type="text" placeholder="Author name" required />
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required />
        </div>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedCategories} onChange={handleCategoryChange}>
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
        <Textarea id="bookDescription" placeholder="Write your book description..." required rows={7} className='w-full'/>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfURL" name='bookPdfURL' type="text" placeholder="Book pdf URL" required />
      </div>
      <Button className='mt-5 bg-blue-700 text-white font-semibold mx-auto rounded hover:bg-black transition-all duration-300' type="submit">Upload Book</Button>
    </form>

    </div>
  )
}

export default UploadBook