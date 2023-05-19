import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-full md:w-3/4 mx-auto my-10 space-y-5">
      {/* Question 1 */}
      <div className="p-5 shadow-lg hover:shadow-xl">
        <h2 className="font-bold">
          1. What is an access token and refresh token ? How do they work and
          where should we store them on the client-side ?
        </h2>
        <p>
          <strong>Ans:</strong> An access token is used to access protected
          resources, while a refresh token is used to obtain a new access token
          when the current one expires.
        </p>
        <p>
          Access tokens are used to authenticate and authorize access to
          protected resources. They are obtained after successful authentication
          and included in API requests. Refresh tokens are used to obtain new
          access tokens without reauthentication. On the client-side, access
          tokens are typically stored in memory or short-lived storage, while
          refresh tokens are stored securely in long-lived storage mechanisms
          such as secure cookies or local storage. Security best practices
          should be followed when storing tokens.
        </p>
      </div>
      {/* Question 2 */}
      <div className="overflow-x-auto p-5 shadow-lg hover:shadow-xl">
        <h2 className="font-bold my-4">
          1. What is an access token and refresh token ? How do they work and
          where should we store them on the client-side ?
        </h2>
        <p>
          <strong>Ans:</strong> SQL and NoSQL databases are two different types
          of databases that store and organize data in different ways. SQL
          databases are relational databases, which means that data is stored in
          tables that are made up of rows and columns. NoSQL databases are
          non-relational databases, which means that data can be stored in a
          variety of ways, including documents, key-value pairs, and graphs.
        </p>
        <p className="my-3">
          Here is a table that compares the two types of databases:
        </p>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Feature</th>
              <th>SQL Databases</th>
              <th>NoSQL Databases</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Data model</td>
              <td>Relational</td>
              <td>Non-relational</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Data storage</td>
              <td>Tables</td>
              <td>Documents, key-value pairs, graphs</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Query language</td>
              <td>SQL</td>
              <td>NoSQL-specific languages</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Scaling</td>
              <td>Vertical</td>
              <td>Horizontal</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td>Flexibility</td>
              <td>Less flexible</td>
              <td>More flexible</td>
            </tr>
            {/* row 6 */}
            <tr>
              <td>Cost</td>
              <td>More expensive </td>
              <td>Less expensive</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Question 3 */}
      <div className="p-5 shadow-lg hover:shadow-xl">
        <h2 className="font-bold">3. What is express js ? What is Nest JS ?</h2>
        <p>
          <strong>Ans:</strong> <strong>Express.js</strong> is a popular web
          application framework for Node.js. It provides a simple and flexible
          way to build web applications and APIs. <strong>Express.js</strong>{" "}
          offers a set of features and utilities that make it easier to handle
          HTTP requests, define routes, and manage middleware for handling
          various aspects of web application development. It follows the
          middleware pattern, allowing developers to plug in functions that
          process requests and responses in a modular manner.
        </p>
        <p>
          <strong>NestJS</strong> is a popular open-source framework for
          building efficient and scalable server-side applications using
          TypeScript or JavaScript. It is built on top of Node.js and provides a
          robust architectural structure inspired by Angular. NestJS leverages
          decorators, dependency injection, and modules to enable the
          development of highly maintainable and testable applications.
        </p>
      </div>
      {/* Question 4 */}
      <div className="p-5 shadow-lg hover:shadow-xl">
        <h2 className="font-bold">
          4. What is MongoDB aggregate and how does it work ?
        </h2>
        <p>
          <strong>Ans:</strong> MongoDB&apos;s aggregation framework is a
          powerful feature that allows you to process and analyze data within a
          collection. It provides a flexible way to perform complex operations,
          such as grouping, filtering, sorting, and transforming data, using a
          series of stages applied in sequence.
        </p>
        <p>
          The MongoDB aggregate pipeline consists of a series of stages that are
          applied to the data in sequence. Each stage performs a specific
          operation on the data, and the results of one stage are passed to the
          next stage.
        </p>
        <div className="space-y-2">
          <p>The following are some of the most common aggregation stages:</p>
          <ul className="list-disc pl-5">
            <li>
              <span className="bg-slate-100 py-1 px-2 rounded-md">$match:</span>{" "}
              Filters documents based on specific conditions.
            </li>
            <li>
              <span className="bg-slate-100 py-1 px-2 rounded-md">$group:</span>{" "}
              Groups documents together based on a specified key and allows you
              to perform aggregation functions on the grouped data.
            </li>
            <li>
              <span className="bg-slate-100 py-1 px-2 rounded-md">
                $project:
              </span>
              It is used to select some specific fields from a collection.
            </li>
            <li>
              <span className="bg-slate-100 py-1 px-2 rounded-md">$sort:</span>
              This stage is used to sort the data in ascending or descending
              order.
            </li>
            <li>
              <span className="bg-slate-100 py-1 px-2 rounded-md">$limit</span>
              and
              <span className="bg-slate-100 py-1 px-2 rounded-md">$skip:</span>
              Limit the number of documents returned or skip a certain number of
              documents.
            </li>
          </ul>
          <p>
            Overall, MongoDB&apos;s aggregate provides a versatile and efficient
            way to perform advanced data processing and analysis on your MongoDB
            collections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
