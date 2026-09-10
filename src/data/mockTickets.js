const mockTickets = [
  {
    id: "TK-1024",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
    },
    subject: "Unable to login to my account",
    description:
      "I have been trying to login to my account since yesterday, but I keep getting an invalid credentials error.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-09T10:30:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message:
          "I cannot login to my account. It keeps saying invalid credentials.",
        createdAt: "2026-09-09T10:30:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "Hi John, let me check this for you. Can you confirm your registered email address?",
        createdAt: "2026-09-09T10:45:00",
      },
    ],
  },

  {
    id: "TK-1025",
    customer: {
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
    },
    subject: "Payment was charged twice",
    description:
      "I made one payment but my account was charged twice. Please help me resolve this issue.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-09-08T14:20:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I was charged twice for the same order.",
        createdAt: "2026-09-08T14:20:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "Thanks for reporting this. We're checking the transaction details.",
        createdAt: "2026-09-08T14:40:00",
      },
    ],
  },

  {
    id: "TK-1026",
    customer: {
      name: "Michael Brown",
      email: "michael.brown@example.com",
    },
    subject: "How can I update my profile?",
    description:
      "I would like to change my profile information but I cannot find the option in my account.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-07T09:15:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "Where can I update my profile information?",
        createdAt: "2026-09-07T09:15:00",
      },
      {
        id: 2,
        sender: "support",
        message: "You can update it from Settings > Profile.",
        createdAt: "2026-09-07T09:30:00",
      },
      {
        id: 3,
        sender: "customer",
        message: "Found it. Thank you!",
        createdAt: "2026-09-07T09:35:00",
      },
    ],
  },

  {
    id: "TK-1027",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
    },
    subject: "Order has not arrived",
    description:
      "My order was supposed to arrive two days ago, but I still haven't received it.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-06T16:10:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "My order is late. Can you check the delivery status?",
        createdAt: "2026-09-06T16:10:00",
      },
    ],
  },

  {
    id: "TK-1028",
    customer: {
      name: "Daniel Miller",
      email: "daniel.miller@example.com",
    },
    subject: "Request to change email address",
    description:
      "I recently changed my email address and need to update it on my account.",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2026-09-05T11:25:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I need to change the email associated with my account.",
        createdAt: "2026-09-05T11:25:00",
      },
      {
        id: 2,
        sender: "support",
        message: "Your email address has been successfully updated.",
        createdAt: "2026-09-05T11:45:00",
      },
    ],
  },

  {
    id: "TK-1029",
    customer: {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
    },
    subject: "App is running slowly",
    description:
      "The application has become very slow when navigating between pages.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2026-09-04T13:50:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "The dashboard takes a long time to load.",
        createdAt: "2026-09-04T13:50:00",
      },
      {
        id: 2,
        sender: "support",
        message: "We're investigating the performance issue.",
        createdAt: "2026-09-04T14:15:00",
      },
    ],
  },

  {
    id: "TK-1030",
    customer: {
      name: "James Anderson",
      email: "james.anderson@example.com",
    },
    subject: "Password reset email not received",
    description:
      "I requested a password reset but haven't received the reset email yet.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-09-03T08:40:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I requested a password reset but didn't receive the email.",
        createdAt: "2026-09-03T08:40:00",
      },
    ],
  },

  {
    id: "TK-1031",
    customer: {
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
    },
    subject: "Unable to download invoice",
    description:
      "The invoice download button isn't working for my recent purchase.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-02T15:05:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "I can't download my invoice.",
        createdAt: "2026-09-02T15:05:00",
      },
      {
        id: 2,
        sender: "support",
        message: "We've fixed the issue. Please try downloading it again.",
        createdAt: "2026-09-02T15:25:00",
      },
    ],
  },

  {
    id: "TK-1032",
    customer: {
      name: "William Thomas",
      email: "william.thomas@example.com",
    },
    subject: "Feature request",
    description:
      "It would be useful to have dark mode available in the application.",
    priority: "Low",
    status: "In Progress",
    createdAt: "2026-09-01T12:00:00",
    messages: [
      {
        id: 1,
        sender: "customer",
        message: "Could you add a dark mode option?",
        createdAt: "2026-09-01T12:00:00",
      },
      {
        id: 2,
        sender: "support",
        message:
          "Thanks for the suggestion. We've forwarded it to the product team.",
        createdAt: "2026-09-01T12:20:00",
      },
    ],
  },
];

export default mockTickets;
