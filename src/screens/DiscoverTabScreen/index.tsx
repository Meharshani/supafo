import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  Switch,
  SafeAreaView,
  Platform,
} from 'react-native';

import Input from '../../components/Input';
import {SearchIcon, filterIcon} from '../../assets/images';
import {Card} from '../../components/Card';
import {CARDS_DATA, CARDS_SWIPER_DATA} from '../../data/cards';
import MapView from '../../components/MapView';
import FilterModal from '../../components/FilterModal';

export default function HomeTabScreen() {
  const [activeTab, setActiveTab] = useState('liste');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.inputFilterContainer}>
          <Input placeholder="Ara..." heading=" " icon={SearchIcon} />
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image style={styles.filter} source={filterIcon} />
          </TouchableOpacity>
        </View>
        <FilterModal visible={openModal} onClose={() => setOpenModal(false)} />
        <View style={styles.tabSwitchContainer}>
          <View style={styles.tabsAndText}>
            <TouchableOpacity
              style={activeTab === 'liste' ? styles.activeTab : styles.tab}
              onPress={() => setActiveTab('liste')}>
              <Text
                style={
                  activeTab === 'liste' ? styles.activeTabText : styles.tabText
                }>
                Liste
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={activeTab === 'harita' ? styles.activeTab : styles.tab}
              onPress={() => setActiveTab('harita')}>
              <Text
                style={
                  activeTab === 'harita' ? styles.activeTabText : styles.tabText
                }>
                Harita
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Tükendi</Text>
            <Switch
              trackColor={{false: '#FF9200', true: '#FF9200'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>

      {activeTab === 'liste' ? (
        <FlatList
          data={CARDS_SWIPER_DATA}
          renderItem={({item}) => <Card {...item} />}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
        />
      ) : (
        <View style={styles.fullMapContainer}>
          <MapView />
          <View style={styles.cardsContainer}>
            <FlatList
              data={CARDS_DATA}
              renderItem={({item}) => <Card {...item} />}
              scrollEnabled={true}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#F7F6FB',
  },
  headerContainer: {
    zIndex: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
  },
  inputFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 5,
    top: 0,
    right: 15,
  },
  input: {},
  filter: {
    width: 36,
    height: 36,
    top: 9,
  },
  tabSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  tabsAndText: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  activeTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#66AE7B',
    borderRadius: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  tabText: {
    color: '#000000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 35,
    width: 115,
    borderRadius: 15,
    gap: 3,
  },
  switchText: {
    marginRight: 6,
    left: 5,
  },
  fullMapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listContentContainer: {
    gap: 7,
    marginTop: 10,
    alignItems: 'center',
  },
  cardsContainer: {
    width: 375,
    height: 155,
    paddingVertical: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
