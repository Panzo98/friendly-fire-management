import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TicketCard from "../components/TicketCard";
import { dummyTickets } from "../data/dummyData";
import { useRoute } from "@react-navigation/native";

const groupTicketsByType = (tickets) => {
  const grouped = tickets.reduce((acc, ticket) => {
    const { type } = ticket;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(ticket);
    return acc;
  }, {});

  return Object.entries(grouped).map(([type, tickets]) => ({ type, tickets }));
};

const ActiveTicketsScreen = () => {
  const route = useRoute();
  const { type } = route.params || {};
  const [activeTicketId, setActiveTicketId] = useState(null);
  console.log(type);

  const filteredTickets = type
    ? dummyTickets.filter((ticket) => ticket.type === type)
    : dummyTickets;

  const groupedTickets = groupTicketsByType(filteredTickets);

  const handleToggleTicket = (id) => {
    setActiveTicketId((prevId) => (prevId === id ? null : id));
  };

  const handleResolveTicket = (id) => {
    console.log(`Tiket ${id} rijesen.`);
  };

  return (
    <>
      <FlatList
        data={groupedTickets}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </Text>
            {item.tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                isActive={ticket.id === activeTicketId}
                onToggle={() => handleToggleTicket(ticket.id)}
                onResolve={() => handleResolveTicket(ticket.id)}
              />
            ))}
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e52936",
    marginTop: 20,
  },
});

export default ActiveTicketsScreen;
