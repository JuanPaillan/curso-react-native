import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  //datos para el sectionlist
  const DATA = [
    {
      title: '18 January 2023',
      data: [
        { id: '1', activity: 'Daily steps', source: 'Google Fit', points: '+60' },
        { id: '2', activity: 'Cycling', source: 'Manually recorded', points: '+110', time: '17:37' },
        { id: '3', activity: 'Running', source: 'Manually recorded', points: '+299', time: '12:03' },
        { id: '4', activity: 'Cycling', source: 'Manually recorded', points: '+108', time: '8:31' },
      ],
    },
    {
      title: '17 January 2023',
      data: [
        { id: '5', activity: 'Daily steps', source: 'Google Fit', points: '+116' },
        { id: '6', activity: 'Cycling', source: 'Manually recorded', points: '+250', time: '9:45' },
      ],
    },
  ];

  //renderizado de cada elemento
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.activity}>{item.activity}</Text>
        <Text style={styles.source}>
          {item.time ? `${item.time} · ${item.source}` : item.source}
        </Text>
      </View>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  //renderizado del encabezado de cada sección
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  //encabezado principal
  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.walletTitle}>Wallet</Text>
      <Text style={styles.pointsBalance}>10,690 <Text style={styles.emoji}>😊</Text></Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.progressText}>4,683 / 15,000 added this month</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Spend Smyles</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ListHeaderComponent={ListHeaderComponent}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#a36cf4',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  walletTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointsBalance: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 32,
  },
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
  },
  progressText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ffc107',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  activity: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 12,
    color: '#757575',
  },
  points: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});

export default App;

