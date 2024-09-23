import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {ValueType} from 'react-native-dropdown-picker';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

type DaysOfWeek = {
  [key: string]: boolean;
};

interface PackageType {
  name: string;
  isToggle: boolean;
  id: number;
}

const FilterModal: React.FC<FilterModalProps> = ({visible, onClose}) => {
  const [days, setDays] = useState<DaysOfWeek>({
    Pazartesi: false,
    Salı: false,
    Çarşamba: false,
    Perşembe: false,
    Cuma: false,
    Cumartesi: false,
    Pazar: false,
  });

  const [packages, setPackages] = useState<Array<PackageType>>([
    {name: 'Yeni Paketler', isToggle: false, id: 0},
    {name: 'Unlu Mamuller', isToggle: false, id: 1},
    {name: 'Yemekler', isToggle: false, id: 2},
  ]);

  const [diets, setDiets] = useState<Array<PackageType>>([
    {name: 'Vejetaryen', isToggle: false, id: 0},
    {name: 'Vegan', isToggle: false, id: 1},
  ]);

  const togglePackages = (foodPackage: PackageType) => {
    let tempArray = [
      ...packages.filter(pack => pack.id !== foodPackage.id),
      {...foodPackage, isToggle: !foodPackage.isToggle},
    ];
    tempArray.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPackages(tempArray);
  };

  const setDietsToggle = (diet: PackageType) => {
    let tempArray = [
      ...diets.filter(pack => pack.id !== diet.id),
      {...diet, isToggle: !diet.isToggle},
    ];
    tempArray.sort((a, b) => (a.id > b.id ? 1 : -1));
    setDiets(tempArray);
  };

  const toggleDay = (day: keyof DaysOfWeek) => {
    setDays({...days, [day]: !days[day]});
  };

  const [collapsibleList, setCollapsibleList] = useState({
    dayCollapsible: false,
    timeCollapsible: false,
    packageCollapsible: false,
    dietCollapsible: false,
  });

  const [startTimeDropdown, setStartTimeDropdown] = useState(false);
  const [endTimeDropdown, setEndTimeDropdown] = useState(false);
  const [startTime, setStartTime] = useState<ValueType>('');
  const [endTime, setEndTime] = useState<ValueType>('');

  const [items, setItems] = useState([
    {label: '07:00', value: '07:00'},
    {label: '08:00', value: '08:00'},
    {label: '09:00', value: '09:00'},
    {label: '10:00', value: '10:00'},
    {label: '11:00', value: '11:00'},
    {label: '12:00', value: '12:00'},
    {label: '13:00', value: '13:00'},
    {label: '14:00', value: '14:00'},
    {label: '15:00', value: '15:00'},
    {label: '16:00', value: '16:00'},
    {label: '17:00', value: '17:00'},
    {label: '18:00', value: '18:00'},
    {label: '19:00', value: '19:00'},
    {label: '20:00', value: '20:00'},
    {label: '21:00', value: '21:00'},
    {label: '22:00', value: '22:00'},
    {label: '23:00', value: '23:00'},
    {label: '24:00', value: '24:00'},
  ]);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.modalHeader}>Filtrele</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Icon name="close" size={20} color="green" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                setCollapsibleList({
                  ...collapsibleList,
                  dayCollapsible: !collapsibleList.dayCollapsible,
                })
              }
              style={styles.timeContainer}>
              <Text style={styles.subHeader}>Günler :</Text>

              <Image
                source={require('../assets/images/upIcon.png')}
                style={
                  !collapsibleList.dayCollapsible
                    ? styles.upIcon
                    : styles.downIcon
                }
              />
            </TouchableOpacity>
            <View style={styles.line} />
            <Collapsible
              style={styles.collapsibleContainer}
              collapsed={collapsibleList.dayCollapsible}>
              {Object.keys(days).map(day => (
                <TouchableOpacity
                  key={day}
                  onPress={() => toggleDay(day as keyof DaysOfWeek)}
                  style={styles.dayContainer}>
                  <Icon
                    name={days[day] ? 'check-square-o' : 'square-o'}
                    size={24}
                    color="green"
                    style={styles.iconStyle}
                  />
                  <Text style={days[day] ? styles.dayActive : styles.day}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </Collapsible>
            <TouchableOpacity
              onPress={() =>
                setCollapsibleList({
                  ...collapsibleList,
                  timeCollapsible: !collapsibleList.timeCollapsible,
                })
              }
              style={styles.timeContainer}>
              <Text style={styles.subHeader}>Saat Aralığı :</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/upIcon.png')}
                  style={
                    !collapsibleList.timeCollapsible
                      ? styles.upIcon
                      : styles.downIcon
                  }
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.line} />
            <Collapsible
              style={[
                styles.timeCollapsibleContainer,
                (startTimeDropdown || endTimeDropdown) && {height: 260},
              ]}
              collapsed={collapsibleList.timeCollapsible}>
              <View style={styles.timeRowContainer}>
                <DropDownPicker
                  open={startTimeDropdown}
                  value={startTime}
                  items={items}
                  setOpen={setStartTimeDropdown}
                  setValue={setStartTime}
                  setItems={setItems}
                  placeholder="Saat Aralığı"
                  style={styles.dropDownPicker}
                  dropDownContainerStyle={styles.dropDownContainer}
                  containerStyle={styles.dropDownPicker}
                />
                <Text style={styles.timeText}>ile</Text>
                <DropDownPicker
                  open={endTimeDropdown}
                  value={endTime}
                  items={items}
                  setOpen={setEndTimeDropdown}
                  setValue={setEndTime}
                  setItems={setItems}
                  placeholder="Saat Aralığı"
                  style={styles.dropDownPicker}
                  dropDownContainerStyle={styles.dropDownContainer}
                  containerStyle={styles.dropDownPicker}
                />
                <View style={styles.plusIconContainer}>
                  <TouchableOpacity>
                    <Icon name="plus" size={14} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plusIconContainer, {marginLeft: -1}]}>
                  <TouchableOpacity>
                    <Icon name="trash" size={14} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </Collapsible>
            <TouchableOpacity
              onPress={() =>
                setCollapsibleList({
                  ...collapsibleList,
                  packageCollapsible: !collapsibleList.packageCollapsible,
                })
              }
              style={styles.timeContainer}>
              <Text style={styles.subHeader}>Süpriz Paket Türü :</Text>
              <Image
                source={require('../assets/images/upIcon.png')}
                style={
                  !collapsibleList.packageCollapsible
                    ? styles.upIcon
                    : styles.downIcon
                }
              />
            </TouchableOpacity>
            <View style={styles.line} />
            <Collapsible
              style={styles.collapsibleContainer}
              collapsed={collapsibleList.packageCollapsible}>
              {packages.map(foodPackage => (
                <TouchableOpacity
                  key={foodPackage.id.toString()}
                  onPress={() => togglePackages(foodPackage)}
                  style={styles.dayContainer}>
                  <Icon
                    name={
                      packages[foodPackage.id]?.isToggle
                        ? 'check-square-o'
                        : 'square-o'
                    }
                    size={24}
                    color="green"
                    style={styles.iconStyle}
                  />
                  <Text
                    style={
                      packages[foodPackage.id]?.isToggle
                        ? styles.dayActive
                        : styles.day
                    }>
                    {foodPackage?.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </Collapsible>
            <TouchableOpacity
              onPress={() =>
                setCollapsibleList({
                  ...collapsibleList,
                  dietCollapsible: !collapsibleList.dietCollapsible,
                })
              }
              style={styles.timeContainer}>
              <Text style={styles.subHeader}>Diyet Tercih Başlığı :</Text>
              <Image
                source={require('../assets/images/upIcon.png')}
                style={
                  !collapsibleList.dietCollapsible
                    ? styles.upIcon
                    : styles.downIcon
                }
              />
            </TouchableOpacity>
            <View style={styles.line} />
            <Collapsible
              style={styles.collapsibleContainer}
              collapsed={collapsibleList.dietCollapsible}>
              {diets.map(diet => (
                <TouchableOpacity
                  key={diet.id.toString()}
                  onPress={() => setDietsToggle(diet)}
                  style={styles.dayContainer}>
                  <Icon
                    name={
                      diets[diet.id]?.isToggle ? 'check-square-o' : 'square-o'
                    }
                    size={24}
                    color="green"
                    style={styles.iconStyle}
                  />
                  <Text
                    style={
                      packages[diet.id]?.isToggle
                        ? styles.dayActive
                        : styles.day
                    }>
                    {diet?.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </Collapsible>
          </ScrollView>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Sonuçları Göster</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: 335,
    height: '80%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'space-between',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  line: {
    height: 2,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  day: {
    marginLeft: 10,
    color: 'black',
  },
  dayActive: {
    marginLeft: 10,
    color: 'green',
  },
  iconStyle: {},
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    marginBottom: 20,
  },
  upIcon: {
    width: 10,
    height: 10,
    right: 5,
  },
  downIcon: {
    width: 10,
    height: 10,
    right: 5,
    transform: [{rotate: '180deg'}],
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 999,
    backgroundColor: 'white',
  },
  dropDownPicker: {
    width: 100,
    borderColor: 'green',
    borderRadius: 15,
  },
  dropDownContainer: {
    width: 100,
    borderColor: 'green',
    borderRadius: 15,
  },
  timeText: {
    marginHorizontal: 7,
  },
  plusIconContainer: {
    backgroundColor: '#66AE7B',
    width: 24,
    height: 24,
    borderRadius: 8,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collapsibleContainer: {
    zIndex: 9999,
    overflow: 'visible',
  },
  timeCollapsibleContainer: {
    zIndex: 9999,
    maxHeight: 250,
  },
});

export default FilterModal;
