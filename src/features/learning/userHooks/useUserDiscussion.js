import { useState, useEffect } from "react";
import { getDiscussions, createDiscussion } from "../api/coursesApi";

const useUserDiscussion = (courseId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const data = await getDiscussions(courseId);
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Send message
  const sendMessages = async (text) => {
    if (!text.trim()) return;

    try {
      const newMsg = await createDiscussion(courseId, text);

      setMessages((prev) => [...prev, newMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [courseId]);

  return {
    messages,
    loading,
    sendMessages,
  };
};

export default useUserDiscussion;
