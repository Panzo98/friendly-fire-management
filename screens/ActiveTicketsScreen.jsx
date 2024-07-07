import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CustomSafeArea from "../components/CustomSafeArea";
import TicketCard from "../components/TicketCard";
import { dummyTickets } from "../data/dummyData";

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
  // const tickets = useSelector((state) =>
  //   state?.tickets?.filter((ticket) => ticket?.status === "active")
  // );
  const groupedTickets = groupTicketsByType(dummyTickets);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aktivni Tiketi</Text>
      <FlatList
        data={groupedTickets}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </Text>
            {item.tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                type={ticket.type}
                computerId={ticket.computerId}
                issue={ticket.issue}
                serialNumber={ticket.serialNumber}
                reportedBy={ticket.reportedBy}
              />
            ))}
          </View>
        )}
      />
    </View>
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
