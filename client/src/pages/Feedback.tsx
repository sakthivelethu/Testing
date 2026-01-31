import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!feedback.trim()) {
      toast({
        title: "Feedback Required",
        description: "Please enter your feedback before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send this to your backend API
      // For now, we'll simulate the email sending process
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      // Here you would typically send the email using a service like:
      // - EmailJS
      // - Your backend API endpoint
      // - A service like SendGrid, Mailgun, etc.

      console.log("Feedback submitted:", { feedback, email: email || "Not provided" });

      setIsSubmitted(true);
      toast({
        title: "Feedback Sent!",
        description: "Thank you for your feedback. We appreciate your input!",
      });

      // Reset form
      setFeedback("");
      setEmail("");

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
              <p className="text-muted-foreground mb-6">
                Your feedback has been sent successfully. We appreciate you taking the time to help us improve CareerGuide.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Feedback
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-display mb-2">Share Your Feedback</h1>
          <p className="text-muted-foreground">
            Help us improve CareerGuide by sharing your thoughts, suggestions, or reporting any issues.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              Your feedback is valuable to us. All fields are optional except the feedback message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Provide your email if you'd like us to follow up on your feedback.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Your Feedback *</Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us what you think about CareerGuide... What do you like? What can we improve? Any bugs or issues you've encountered?"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[120px] w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Feedback
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Your feedback helps us make CareerGuide better for everyone.
            We typically respond to feedback within 24-48 hours.
          </p>
        </div>
      </div>
    </Layout>
  );
}