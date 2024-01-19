export default function Button({ text }) {
  return <button className="button"> {text}</button>;
  <div className="buttons">
        {/* Button for LeetCode profile */}
        <Button text="hackerrank" url="#" />

        {/* Button for GitHub */}
        <Button text="GitHub" url="#" />

        {/* Button for Instagram */}
        <Button text="Instagram" url="#" />

        {/* Button for Portfolio */}
        <Button text="Portfolio" url="#" />
      </div>
}
