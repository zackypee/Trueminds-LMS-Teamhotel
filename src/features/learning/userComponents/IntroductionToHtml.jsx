import React from 'react'

export default function IntroductionToHtml() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 font-sans text-[#333]">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-normal mb-4">HTML Introduction</h1>
      <hr className="border-gray-300 mb-4" />
      <p className="text-base md:text-lg mb-4">HTML is the standard markup language for creating Web pages.</p>
      <hr className="border-gray-300 mb-8" />

      {/* What is HTML */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-normal mb-4">What is HTML?</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </ul>
      </div>

      {/* A Simple HTML Document */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-normal mb-6">A Simple HTML Document</h2>

        {/* Example Box */}
        <div className="bg-[#f3f3f3] rounded p-4 md:p-6 mb-6">
          <h3 className="text-xl font-normal mb-4">Example</h3>
          <div className="bg-white border-l-4 border-[#0029F5] px-4 py-4 overflow-x-auto">
            <pre className="text-sm md:text-base font-mono leading-relaxed">
              <code>
                <span className="text-[#905]">&lt;!DOCTYPE html&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;html&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;head&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;title&gt;</span>
                <span className="text-black">Page Title</span>
                <span className="text-[#905]">&lt;/title&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;/head&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;body&gt;</span>{'\n\n'}
                <span className="text-[#905]">&lt;h1&gt;</span>
                <span className="text-black">My First Heading</span>
                <span className="text-[#905]">&lt;/h1&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;p&gt;</span>
                <span className="text-black">My first paragraph.</span>
                <span className="text-[#905]">&lt;/p&gt;</span>{'\n\n'}
                <span className="text-[#905]">&lt;/body&gt;</span>{'\n'}
                <span className="text-[#905]">&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Example Explained */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-normal mb-4">Example Explained</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;html&gt;</code> element is the root element of an HTML page</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;head&gt;</code> element contains meta information about the HTML page</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;h1&gt;</code> element defines a large heading</li>
            <li>The <code className="bg-[#f1f1f1] text-[#c7254e] px-1 rounded text-sm">&lt;p&gt;</code> element defines a paragraph</li>
          </ul>
        </div>
      </div>

      {/* What is an HTML Element */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-normal mb-4">What is an HTML Element?</h2>
        <p className="text-sm md:text-base mb-4">An HTML element is defined by a start tag, some content, and an end tag:</p>

        {/* Tag Syntax Box */}
        <div className="bg-white border-l-4 border-[#04AA6D] px-4 py-4 mb-4 overflow-x-auto">
          <p className="font-mono text-sm md:text-base">
            <span className="text-[#0029F5]">&lt;tagname&gt;</span>
            {' '}Content goes here...{' '}
            <span className="text-[#0029F5]">&lt;/tagname&gt;</span>
          </p>
        </div>

        <p className="text-sm md:text-base mb-4">
          The HTML <strong>element</strong> is everything from the start tag to the end tag:
        </p>

        {/* Examples */}
        <div className="bg-white border-l-4 border-[#04AA6D] px-4 py-4 mb-6 space-y-3 overflow-x-auto">
          <p className="font-mono text-sm md:text-base">
            <span className="text-[#0000BB]">&lt;h1&gt;</span>
            My First Heading
            <span className="text-[#0000BB]">&lt;/h1&gt;</span>
          </p>
          <p className="font-mono text-sm md:text-base">
            <span className="text-[#0000BB]">&lt;p&gt;</span>
            My first paragraph.
            <span className="text-[#0000BB]">&lt;/p&gt;</span>
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-white">
                <th className="text-left px-4 py-3 border border-gray-300 font-semibold">Start tag</th>
                <th className="text-left px-4 py-3 border border-gray-300 font-semibold">Element content</th>
                <th className="text-left px-4 py-3 border border-gray-300 font-semibold">End tag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f9f9f9]">
                <td className="px-4 py-3 border border-gray-300">&lt;h1&gt;</td>
                <td className="px-4 py-3 border border-gray-300">My First Heading</td>
                <td className="px-4 py-3 border border-gray-300">&lt;/h1&gt;</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border border-gray-300">&lt;p&gt;</td>
                <td className="px-4 py-3 border border-gray-300">My first paragraph.</td>
                <td className="px-4 py-3 border border-gray-300">&lt;/p&gt;</td>
              </tr>
              <tr className="bg-[#f9f9f9]">
                <td className="px-4 py-3 border border-gray-300">&lt;br&gt;</td>
                <td className="px-4 py-3 border border-gray-300 italic">none</td>
                <td className="px-4 py-3 border border-gray-300 italic">none</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}