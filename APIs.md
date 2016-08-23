Chat APIs (Documented as well as I could without internet):
Mark as read API: ```https://chat.roblox.com/v1.0/mark-as-read``` - Parameters: conversationId, endMessageId
Mark as seen API: https://chat.roblox.com/v1.0/mark-as-seen - Parameters: Unknown
Send message API: https://chat.roblox.com/v1.0/send-message - Parameters: conversationId, message
Get conversations API: https://chat.roblox.com/v1.0/get-conversations - Parameters: conversationIds
User conversations API: https://chat.roblox.com/v1.0/get-user-conversations - Parameters: pageNumber, pageSize
Unread conversations API: https://chat.roblox.com/v1.0/get-unread-conversations - Parameters: None
Get messages API: https://chat.roblox.com/v1.0/get-messages - Parameters: conversationId, exclusiveStartMessageId, pageSize
Multiple get latest messages API: https://chat.roblox.com/v1.0/multi-get-latest-messages - Parameters: Unknown
Unread messages API: https://chat.roblox.com/v1.0/get-unread-messages - Parameters: None
Get unread conversation count API: https://chat.roblox.com/v1.0/get-unread-conversation-count - Parameters: None
Start one-to-one conversation API: https://chat.roblox.com/v1.0/start-one-to-one-conversation - Parameters: participantUserId
Start group conversation API: https://chat.roblox.com/v1.0/start-group-conversation - Parameters: participantUserIds
Add to conversation API: https://chat.roblox.com/v1.0/add-to-conversation - Parameters: participantUserIds, conversationId
Remove from conversation API: https://chat.roblox.com/v1.0/remove-from-conversation - Parameters: participantUserId, conversationId

Party APIs (Documented as well as I could without internet):
Create party API: https://chat.roblox.com/v1.0/party/create - Parameters: invitedUserIds, conversationId
Party invite API: https://chat.roblox.com/v1.0/party/invite - Parameters: invitedUserId, partyId
Leave party API: https://chat.roblox.com/v1.0/party/leave - Parameters: partyId
Join party API: https://chat.roblox.com/v1.0/party/join - Parameters: partyId
Get party invites: https://chat.roblox.com/v1.0/party/get-invites - Parameters: pageNumber, pageSize
Get current party API: https://chat.roblox.com/v1.0/party/get-current - Parameters: Unknown
Remove from party API: https://chat.roblox.com/v1.0/party/remove-from-party - Parameters: partyId, userId
Get parties for conversations API: https://chat.roblox.com/v1.0/party/get-parties-for-conversations - Parameters: conversationIds
