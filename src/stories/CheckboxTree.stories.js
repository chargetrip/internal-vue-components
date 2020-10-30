import CheckboxTree from "../components/checkbox-tree/CheckboxTree.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/CheckboxTree",
  component: CheckboxTree,
  argTypes: {
    all: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      options: JSON.parse(
        `[{"label":"null","value":false,"checkboxId":"null","children":[{"label":"null ","id":"5f9a7befe944e47fdc944fe7","checkboxId":"5f9a7befe944e47fdc944fe7","value":false},{"label":"null ","id":"5f9a7bece944e47fdc944fe3","checkboxId":"5f9a7bece944e47fdc944fe3","value":false},{"label":"null ","id":"5f9a7be9e944e47fdc944fdf","checkboxId":"5f9a7be9e944e47fdc944fdf","value":false},{"label":"null ","id":"5f9a7bd7e944e47fdc944fc9","checkboxId":"5f9a7bd7e944e47fdc944fc9","value":false},{"label":"null ","id":"5f9a7be8e944e47fdc944fdd","checkboxId":"5f9a7be8e944e47fdc944fdd","value":false},{"label":"null ","id":"5f9a7be7e944e47fdc944fdb","checkboxId":"5f9a7be7e944e47fdc944fdb","value":false},{"label":"null ","id":"5f9a7be5e944e47fdc944fd9","checkboxId":"5f9a7be5e944e47fdc944fd9","value":false},{"label":"null ","id":"5f9a7bd4e944e47fdc944fc7","checkboxId":"5f9a7bd4e944e47fdc944fc7","value":false},{"label":"null ","id":"5f9a7be4e944e47fdc944fd7","checkboxId":"5f9a7be4e944e47fdc944fd7","value":false},{"label":"null ","id":"5f9981fcd91a8e7f7e19a484","checkboxId":"5f9981fcd91a8e7f7e19a484","value":false},{"label":"null ","id":"5f9a7be2e944e47fdc944fd5","checkboxId":"5f9a7be2e944e47fdc944fd5","value":false},{"label":"null ","id":"5f9a7be1e944e47fdc944fd3","checkboxId":"5f9a7be1e944e47fdc944fd3","value":false},{"label":"null ","id":"5f9a7be0e944e47fdc944fd1","checkboxId":"5f9a7be0e944e47fdc944fd1","value":false},{"label":"null ","id":"5f9a7bdee944e47fdc944fcf","checkboxId":"5f9a7bdee944e47fdc944fcf","value":false},{"label":"null ","id":"5f9a7bebe944e47fdc944fe1","checkboxId":"5f9a7bebe944e47fdc944fe1","value":false},{"label":"null ","id":"5f9a7bdce944e47fdc944fcd","checkboxId":"5f9a7bdce944e47fdc944fcd","value":false},{"label":"null ","id":"5f9a7bdbe944e47fdc944fcb","checkboxId":"5f9a7bdbe944e47fdc944fcb","value":false},{"label":"null ","id":"5f9a7beee944e47fdc944fe5","checkboxId":"5f9a7beee944e47fdc944fe5","value":false}]},{"label":"Volvo","value":false,"checkboxId":"Volvo","children":[{"label":"XC40 P8 AWD Recharge","id":"5f043cdcbc262f1627fc02e3","checkboxId":"5f043cdcbc262f1627fc02e3","value":false}]},{"label":"Volkswagen","value":false,"checkboxId":"Volkswagen","children":[{"label":"ID.3 1st","id":"5f48c77e40d9c47fcc2c3c67","checkboxId":"5f48c77e40d9c47fcc2c3c67","value":false},{"label":"ID.3 Pro","id":"5f043d22bc262f1627fc02fb","checkboxId":"5f043d22bc262f1627fc02fb","value":false},{"label":"ID.3 Pro Performance","id":"5f48c78440d9c41c552c3c73","checkboxId":"5f48c78440d9c41c552c3c73","value":false},{"label":"ID.3 Pro S","id":"5f043d24bc262f1627fc02fd","checkboxId":"5f043d24bc262f1627fc02fd","value":false},{"label":"ID.3 Pure","id":"5f043c4abc262f1627fc02a5","checkboxId":"5f043c4abc262f1627fc02a5","value":false},{"label":"e-Golf 30 kWh","id":"5d161be8c9eef4bc5dd9d215","checkboxId":"5d161be8c9eef4bc5dd9d215","value":false},{"label":"e-Golf ","id":"5f043b3fbc262f1627fc0241","checkboxId":"5f043b3fbc262f1627fc0241","value":false},{"label":"e-Up! ","id":"5f043ce2bc262f1627fc02e5","checkboxId":"5f043ce2bc262f1627fc02e5","value":false},{"label":"e-Up! ","id":"5f043b45bc262f1627fc0243","checkboxId":"5f043b45bc262f1627fc0243","value":false},{"label":"e-Up! ","id":"5f043bb0bc262f1627fc0273","checkboxId":"5f043bb0bc262f1627fc0273","value":false}]},{"label":"Tesla","value":false,"checkboxId":"Tesla","children":[{"label":"Model 3 Long Range Dual Motor","id":"5d161bf3c9eef42b2ed9d233","checkboxId":"5d161bf3c9eef42b2ed9d233","value":false},{"label":"Model 3 Long Range Performance","id":"5d161bf4c9eef4043bd9d234","checkboxId":"5d161bf4c9eef4043bd9d234","value":false},{"label":"Model 3 Long Range RWD","id":"5d161bedc9eef45800d9d220","checkboxId":"5d161bedc9eef45800d9d220","value":false},{"label":"Model 3 Standard Range","id":"5d161be3c9eef48f78d9d203","checkboxId":"5d161be3c9eef48f78d9d203","value":false},{"label":"Model 3 Standard Range Plus","id":"5d161bfac9eef443e6d9d247","checkboxId":"5d161bfac9eef443e6d9d247","value":false},{"label":"Model S 100D","id":"5d161be8c9eef43905d9d216","checkboxId":"5d161be8c9eef43905d9d216","value":false},{"label":"Model S 60","id":"5f043b8cbc262f1627fc0263","checkboxId":"5f043b8cbc262f1627fc0263","value":false},{"label":"Model S 60D","id":"5f043b8dbc262f1627fc0265","checkboxId":"5f043b8dbc262f1627fc0265","value":false},{"label":"Model S 70","id":"5f043b20bc262f1627fc0231","checkboxId":"5f043b20bc262f1627fc0231","value":false},{"label":"Model S 70","id":"5f043b66bc262f1627fc0253","checkboxId":"5f043b66bc262f1627fc0253","value":false},{"label":"Model S 70D","id":"5f043b28bc262f1627fc0235","checkboxId":"5f043b28bc262f1627fc0235","value":false},{"label":"Model S 70D","id":"5f043b6cbc262f1627fc0255","checkboxId":"5f043b6cbc262f1627fc0255","value":false},{"label":"Model S 75","id":"5d161be5c9eef4e215d9d20b","checkboxId":"5d161be5c9eef4e215d9d20b","value":false},{"label":"Model S 75D","id":"5d161be5c9eef46132d9d20a","checkboxId":"5d161be5c9eef46132d9d20a","value":false},{"label":"Model S 85","id":"5f043b26bc262f1627fc0233","checkboxId":"5f043b26bc262f1627fc0233","value":false},{"label":"Model S 85D","id":"5f043b2cbc262f1627fc0237","checkboxId":"5f043b2cbc262f1627fc0237","value":false},{"label":"Model S 90D","id":"5f043b73bc262f1627fc0257","checkboxId":"5f043b73bc262f1627fc0257","value":false},{"label":"Model S 90D","id":"5f043b2ebc262f1627fc0239","checkboxId":"5f043b2ebc262f1627fc0239","value":false},{"label":"Model S Long Range","id":"5d161bf9c9eef44a5bd9d243","checkboxId":"5d161bf9c9eef44a5bd9d243","value":false},{"label":"Model S Long Range","id":"5f043d02bc262f1627fc02ef","checkboxId":"5f043d02bc262f1627fc02ef","value":false},{"label":"Model S Ludicrous Performance","id":"5d161bfac9eef4cd96d9d244","checkboxId":"5d161bfac9eef4cd96d9d244","value":false},{"label":"Model S P100D","id":"5d161be6c9eef45f14d9d20f","checkboxId":"5d161be6c9eef45f14d9d20f","value":false},{"label":"Model S P85D","id":"5f043b35bc262f1627fc023b","checkboxId":"5f043b35bc262f1627fc023b","value":false},{"label":"Model S P90D","id":"5f043b74bc262f1627fc0259","checkboxId":"5f043b74bc262f1627fc0259","value":false},{"label":"Model S P90D","id":"5f043b37bc262f1627fc023d","checkboxId":"5f043b37bc262f1627fc023d","value":false},{"label":"Model S P90DL","id":"5f043b3dbc262f1627fc023f","checkboxId":"5f043b3dbc262f1627fc023f","value":false},{"label":"Model S P90DL","id":"5f043b76bc262f1627fc025b","checkboxId":"5f043b76bc262f1627fc025b","value":false},{"label":"Model S Performance","id":"5d161bfcc9eef4c5b2d9d24c","checkboxId":"5d161bfcc9eef4c5b2d9d24c","value":false},{"label":"Model S Performance","id":"5d2e65211011c08ef6aab51d","checkboxId":"5d2e65211011c08ef6aab51d","value":false},{"label":"Model S Standard Range","id":"5f043cfbbc262f1627fc02ed","checkboxId":"5f043cfbbc262f1627fc02ed","value":false},{"label":"Model S Standard Range","id":"5d161bf9c9eef41deed9d242","checkboxId":"5d161bf9c9eef41deed9d242","value":false},{"label":"Model X 100D","id":"5d161be9c9eef4c00cd9d217","checkboxId":"5d161be9c9eef4c00cd9d217","value":false},{"label":"Model X 60D","id":"5f043b94bc262f1627fc0267","checkboxId":"5f043b94bc262f1627fc0267","value":false},{"label":"Model X 75D","id":"5d161be1c9eef41841d9d1fe","checkboxId":"5d161be1c9eef41841d9d1fe","value":false},{"label":"Model X 90D","id":"5f043b55bc262f1627fc024b","checkboxId":"5f043b55bc262f1627fc024b","value":false},{"label":"Model X Long Range","id":"5d161bfac9eef493f8d9d245","checkboxId":"5d161bfac9eef493f8d9d245","value":false},{"label":"Model X Long Range","id":"5f043d0abc262f1627fc02f3","checkboxId":"5f043d0abc262f1627fc02f3","value":false},{"label":"Model X Ludicrous Performance","id":"5f043d15bc262f1627fc02f7","checkboxId":"5f043d15bc262f1627fc02f7","value":false},{"label":"Model X Ludicrous Performance","id":"5d161bfac9eef407b6d9d246","checkboxId":"5d161bfac9eef407b6d9d246","value":false},{"label":"Model X P100D","id":"5d161be7c9eef45b02d9d210","checkboxId":"5d161be7c9eef45b02d9d210","value":false},{"label":"Model X P90D","id":"5f043b5abc262f1627fc024d","checkboxId":"5f043b5abc262f1627fc024d","value":false},{"label":"Model X P90DL","id":"5f043b5cbc262f1627fc024f","checkboxId":"5f043b5cbc262f1627fc024f","value":false},{"label":"Model X Performance","id":"5d161bfcc9eef466c7d9d24d","checkboxId":"5d161bfcc9eef466c7d9d24d","value":false},{"label":"Model X Performance","id":"5d2e65221011c062e9aab51f","checkboxId":"5d2e65221011c062e9aab51f","value":false},{"label":"Model X Performance","id":"5f043d10bc262f1627fc02f5","checkboxId":"5f043d10bc262f1627fc02f5","value":false},{"label":"Model X Standard Range","id":"5f043d08bc262f1627fc02f1","checkboxId":"5f043d08bc262f1627fc02f1","value":false},{"label":"Model Y Long Range Dual Motor","id":"5f043cd1bc262f1627fc02db","checkboxId":"5f043cd1bc262f1627fc02db","value":false},{"label":"Model Y Long Range Performance","id":"5f043cd3bc262f1627fc02dd","checkboxId":"5f043cd3bc262f1627fc02dd","value":false}]},{"label":"Sono","value":false,"checkboxId":"Sono","children":[{"label":"Sion ","id":"5f043c95bc262f1627fc02c3","checkboxId":"5f043c95bc262f1627fc02c3","value":false}]},{"label":"Smart","value":false,"checkboxId":"Smart","children":[{"label":"EQ forfour ","id":"5f043c5fbc262f1627fc02b1","checkboxId":"5f043c5fbc262f1627fc02b1","value":false},{"label":"EQ forfour ","id":"5f043d4cbc262f1627fc0311","checkboxId":"5f043d4cbc262f1627fc0311","value":false},{"label":"EQ fortwo cabrio","id":"5f043c58bc262f1627fc02af","checkboxId":"5f043c58bc262f1627fc02af","value":false},{"label":"EQ fortwo cabrio","id":"5f043d4abc262f1627fc030f","checkboxId":"5f043d4abc262f1627fc030f","value":false},{"label":"EQ fortwo coupe","id":"5f043c55bc262f1627fc02ad","checkboxId":"5f043c55bc262f1627fc02ad","value":false},{"label":"EQ fortwo coupe","id":"5f043d49bc262f1627fc030d","checkboxId":"5f043d49bc262f1627fc030d","value":false},{"label":"ForFour Electric Drive","id":"5f043bc2bc262f1627fc027d","checkboxId":"5f043bc2bc262f1627fc027d","value":false},{"label":"ForTwo Cabrio Electric Drive","id":"5f043bf6bc262f1627fc0289","checkboxId":"5f043bf6bc262f1627fc0289","value":false},{"label":"ForTwo Electric Drive","id":"5f043bbbbc262f1627fc027b","checkboxId":"5f043bbbbc262f1627fc027b","value":false}]},{"label":"Skoda","value":false,"checkboxId":"Skoda","children":[{"label":"CITIGOe iV ","id":"5f043ce8bc262f1627fc02e7","checkboxId":"5f043ce8bc262f1627fc02e7","value":false},{"label":"Enyaq iV 50","id":"5f043cd6bc262f1627fc02e1","checkboxId":"5f043cd6bc262f1627fc02e1","value":false},{"label":"Enyaq iV 60","id":"5f043dc2bc262f1627fc0343","checkboxId":"5f043dc2bc262f1627fc0343","value":false},{"label":"Enyaq iV 80","id":"5f043dcabc262f1627fc0345","checkboxId":"5f043dcabc262f1627fc0345","value":false},{"label":"Enyaq iV 80X","id":"5f043dccbc262f1627fc0347","checkboxId":"5f043dccbc262f1627fc0347","value":false},{"label":"Enyaq iV RS","id":"5f043dd2bc262f1627fc0349","checkboxId":"5f043dd2bc262f1627fc0349","value":false}]},{"label":"SEAT","value":false,"checkboxId":"SEAT","children":[{"label":"Mii Electric ","id":"5f043cf0bc262f1627fc02e9","checkboxId":"5f043cf0bc262f1627fc02e9","value":false}]},{"label":"Renault","value":false,"checkboxId":"Renault","children":[{"label":"Kangoo Maxi ZE 33","id":"5d161bedc9eef41616d9d221","checkboxId":"5d161bedc9eef41616d9d221","value":false},{"label":"Twingo Electric","id":"5f043daabc262f1627fc0337","checkboxId":"5f043daabc262f1627fc0337","value":false},{"label":"Zoe Q210","id":"5f043b0abc262f1627fc022a","checkboxId":"5f043b0abc262f1627fc022a","value":false},{"label":"Zoe Q90","id":"5f043c54bc262f1627fc02ab","checkboxId":"5f043c54bc262f1627fc02ab","value":false},{"label":"Zoe Q90","id":"5f043ba2bc262f1627fc026f","checkboxId":"5f043ba2bc262f1627fc026f","value":false},{"label":"Zoe R110","id":"5d161bf0c9eef4f63cd9d22b","checkboxId":"5d161bf0c9eef4f63cd9d22b","value":false},{"label":"Zoe R240","id":"5f043b47bc262f1627fc0245","checkboxId":"5f043b47bc262f1627fc0245","value":false},{"label":"Zoe R90","id":"5f043ba0bc262f1627fc026d","checkboxId":"5f043ba0bc262f1627fc026d","value":false},{"label":"Zoe R90","id":"5f043c8ebc262f1627fc02c1","checkboxId":"5f043c8ebc262f1627fc02c1","value":false},{"label":"Zoe R90 Entry","id":"5f043ba9bc262f1627fc0271","checkboxId":"5f043ba9bc262f1627fc0271","value":false},{"label":"Zoe ZE50 R110","id":"5d161bf7c9eef4b069d9d23c","checkboxId":"5d161bf7c9eef4b069d9d23c","value":false},{"label":"Zoe ZE50 R135","id":"5d161c01c9eef4fd5fd9d25d","checkboxId":"5d161c01c9eef4fd5fd9d25d","value":false}]},{"label":"Porsche","value":false,"checkboxId":"Porsche","children":[{"label":"Taycan 4S","id":"5da015a913741475343e9d02","checkboxId":"5da015a913741475343e9d02","value":false},{"label":"Taycan 4S","id":"5da0152313741475343e9d01","checkboxId":"5da0152313741475343e9d01","value":false},{"label":"Taycan Turbo","id":"5d19b8648efbca45ec9607de","checkboxId":"5d19b8648efbca45ec9607de","value":false},{"label":"Taycan Turbo S","id":"5d19b8d58efbca45ec9607e0","checkboxId":"5d19b8d58efbca45ec9607e0","value":false}]},{"label":"Polestar","value":false,"checkboxId":"Polestar","children":[{"label":"2 ","id":"5f043cbabc262f1627fc02d1","checkboxId":"5f043cbabc262f1627fc02d1","value":false}]},{"label":"Peugeot","value":false,"checkboxId":"Peugeot","children":[{"label":"Partner Tepee Electric","id":"5f043c0fbc262f1627fc0291","checkboxId":"5f043c0fbc262f1627fc0291","value":false},{"label":"e-2008 SUV ","id":"5f043d32bc262f1627fc0303","checkboxId":"5f043d32bc262f1627fc0303","value":false},{"label":"e-208 ","id":"5f043cb3bc262f1627fc02cf","checkboxId":"5f043cb3bc262f1627fc02cf","value":false},{"label":"iOn 16 kWh","id":"5d161bebc9eef463d6d9d21c","checkboxId":"5d161bebc9eef463d6d9d21c","value":false},{"label":"iOn ","id":"5f043b1abc262f1627fc022e","checkboxId":"5f043b1abc262f1627fc022e","value":false}]},{"label":"Opel","value":false,"checkboxId":"Opel","children":[{"label":"Ampera-e ","id":"5f043b4dbc262f1627fc0247","checkboxId":"5f043b4dbc262f1627fc0247","value":false},{"label":"Corsa-e ","id":"5f043cf6bc262f1627fc02eb","checkboxId":"5f043cf6bc262f1627fc02eb","value":false},{"label":"Mokka-e ","id":"5f043dc1bc262f1627fc0341","checkboxId":"5f043dc1bc262f1627fc0341","value":false}]},{"label":"Nissan","value":false,"checkboxId":"Nissan","children":[{"label":"Ariya 63kWh","id":"5f48c77f40d9c439a62c3c69","checkboxId":"5f48c77f40d9c439a62c3c69","value":false},{"label":"Ariya 87kWh","id":"5f48c78040d9c41ec22c3c6b","checkboxId":"5f48c78040d9c41ec22c3c6b","value":false},{"label":"Ariya e-4ORCE 63kWh","id":"5f48c78140d9c47a162c3c6d","checkboxId":"5f48c78140d9c47a162c3c6d","value":false},{"label":"Ariya e-4ORCE 87kWh","id":"5f48c78240d9c44ce52c3c6f","checkboxId":"5f48c78240d9c44ce52c3c6f","value":false},{"label":"Ariya e-4ORCE 87kWh Performance","id":"5f48c78340d9c466d82c3c71","checkboxId":"5f48c78340d9c466d82c3c71","value":false},{"label":"Leaf 24 kWh 2011","id":"5d161bdac9eef48e33d9d1e8","checkboxId":"5d161bdac9eef48e33d9d1e8","value":false},{"label":"Leaf 24 kWh 2013","id":"5d161bdbc9eef4702dd9d1eb","checkboxId":"5d161bdbc9eef4702dd9d1eb","value":false},{"label":"Leaf 30 kWh","id":"5d161bdbc9eef45824d9d1ec","checkboxId":"5d161bdbc9eef45824d9d1ec","value":false},{"label":"Leaf 40 kWh","id":"5d161beec9eef4f28ad9d226","checkboxId":"5d161beec9eef4f28ad9d226","value":false},{"label":"Leaf e+","id":"5f043c7bbc262f1627fc02b9","checkboxId":"5f043c7bbc262f1627fc02b9","value":false},{"label":"e-NV200 Evalia ","id":"5f043c34bc262f1627fc029d","checkboxId":"5f043c34bc262f1627fc029d","value":false},{"label":"e-NV200 Evalia 22 kWh","id":"5d161bdcc9eef4beb4d9d1ed","checkboxId":"5d161bdcc9eef4beb4d9d1ed","value":false}]},{"label":"Mitsubishi","value":false,"checkboxId":"Mitsubishi","children":[{"label":"i-MiEV 16 kWh","id":"5d161bddc9eef4251dd9d1f1","checkboxId":"5d161bddc9eef4251dd9d1f1","value":false},{"label":"i-MiEV ","id":"5f043be3bc262f1627fc0285","checkboxId":"5f043be3bc262f1627fc0285","value":false}]},{"label":"Mini","value":false,"checkboxId":"Mini","children":[{"label":"Cooper SE ","id":"5f043ca4bc262f1627fc02c7","checkboxId":"5f043ca4bc262f1627fc02c7","value":false}]},{"label":"Mercedes","value":false,"checkboxId":"Mercedes","children":[{"label":"B 250e ","id":"5f043af4bc262f1627fc0222","checkboxId":"5f043af4bc262f1627fc0222","value":false},{"label":"EQC 400 4MATIC","id":"5f043c66bc262f1627fc02b3","checkboxId":"5f043c66bc262f1627fc02b3","value":false},{"label":"EQV 300 Long","id":"5f043d69bc262f1627fc031f","checkboxId":"5f043d69bc262f1627fc031f","value":false}]},{"label":"Mazda","value":false,"checkboxId":"Mazda","children":[{"label":"MX-30 ","id":"5f043d70bc262f1627fc0321","checkboxId":"5f043d70bc262f1627fc0321","value":false}]},{"label":"MG","value":false,"checkboxId":"MG","children":[{"label":"ZS EV","id":"5f043d1bbc262f1627fc02f9","checkboxId":"5f043d1bbc262f1627fc02f9","value":false}]},{"label":"Lightyear","value":false,"checkboxId":"Lightyear","children":[{"label":"One ","id":"5f043caebc262f1627fc02cd","checkboxId":"5f043caebc262f1627fc02cd","value":false}]},{"label":"Lexus","value":false,"checkboxId":"Lexus","children":[{"label":"UX 300e","id":"5f043d8fbc262f1627fc032d","checkboxId":"5f043d8fbc262f1627fc032d","value":false}]},{"label":"Kia","value":false,"checkboxId":"Kia","children":[{"label":"e-Soul 39 kWh","id":"5f043defbc262f1627fc0353","checkboxId":"5f043defbc262f1627fc0353","value":false},{"label":"e-Soul 64 kWh","id":"5f043de7bc262f1627fc0351","checkboxId":"5f043de7bc262f1627fc0351","value":false},{"label":"e-Soul 64 kWh","id":"5f043c9dbc262f1627fc02c5","checkboxId":"5f043c9dbc262f1627fc02c5","value":false},{"label":"Soul EV ","id":"5f043aedbc262f1627fc0220","checkboxId":"5f043aedbc262f1627fc0220","value":false},{"label":"Soul EV 30 kWh","id":"5d161befc9eef48216d9d228","checkboxId":"5d161befc9eef48216d9d228","value":false},{"label":"e-Niro 39 kWh","id":"5f043da3bc262f1627fc0335","checkboxId":"5f043da3bc262f1627fc0335","value":false},{"label":"e-Niro 64 kWh","id":"5f043d9bbc262f1627fc0331","checkboxId":"5f043d9bbc262f1627fc0331","value":false},{"label":"e-Niro 64 kWh","id":"5d161bf0c9eef41c02d9d229","checkboxId":"5d161bf0c9eef41c02d9d229","value":false}]},{"label":"Byton","value":false,"checkboxId":"Byton","children":[{"label":"M-Byte 72 kWh 2WD","id":"5f043d52bc262f1627fc0315","checkboxId":"5f043d52bc262f1627fc0315","value":false},{"label":"M-Byte 95 kWh 2WD","id":"5f043dbebc262f1627fc033d","checkboxId":"5f043dbebc262f1627fc033d","value":false},{"label":"M-Byte 95 kWh 4WD","id":"5f043d58bc262f1627fc0317","checkboxId":"5f043d58bc262f1627fc0317","value":false}]},{"label":"BMW","value":false,"checkboxId":"BMW","children":[{"label":"i3 120 Ah","id":"5d161bf4c9eef4a5b6d9d236","checkboxId":"5d161bf4c9eef4a5b6d9d236","value":false},{"label":"i3 60 Ah","id":"5d161beec9eef4074dd9d224","checkboxId":"5d161beec9eef4074dd9d224","value":false},{"label":"i3 60 Ah","id":"5e4693c559010964af60c0a1","checkboxId":"5e4693c559010964af60c0a1","value":false},{"label":"i3 94 Ah","id":"5f043b7cbc262f1627fc025d","checkboxId":"5f043b7cbc262f1627fc025d","value":false},{"label":"i3s 120 Ah","id":"5f043c8cbc262f1627fc02bf","checkboxId":"5f043c8cbc262f1627fc02bf","value":false},{"label":"i3s 94 Ah","id":"5d161beec9eef4c250d9d225","checkboxId":"5d161beec9eef4c250d9d225","value":false},{"label":"iX3 ","id":"5f48c73b40d9c46b192c3c24","checkboxId":"5f48c73b40d9c46b192c3c24","value":false}]},{"label":"Audi","value":false,"checkboxId":"Audi","children":[{"label":"e-tron 50 quattro","id":"5f043d3bbc262f1627fc0309","checkboxId":"5f043d3bbc262f1627fc0309","value":false},{"label":"e-tron 55 quattro","id":"5d161beac9eef4a1f1d9d21a","checkboxId":"5d161beac9eef4a1f1d9d21a","value":false},{"label":"e-tron 55 quattro","id":"5f043d91bc262f1627fc032f","checkboxId":"5f043d91bc262f1627fc032f","value":false},{"label":"e-tron S 55 quattro","id":"5f043db0bc262f1627fc0339","checkboxId":"5f043db0bc262f1627fc0339","value":false},{"label":"e-tron S Sportback 55 quattro","id":"5f043db7bc262f1627fc033b","checkboxId":"5f043db7bc262f1627fc033b","value":false},{"label":"e-tron Sportback 50 quattro","id":"5f043d88bc262f1627fc032b","checkboxId":"5f043d88bc262f1627fc032b","value":false},{"label":"e-tron Sportback 55 quattro","id":"5f043c26bc262f1627fc0299","checkboxId":"5f043c26bc262f1627fc0299","value":false}]},{"label":"Aiways","value":false,"checkboxId":"Aiways","children":[{"label":"U5 ","id":"5f043da2bc262f1627fc0333","checkboxId":"5f043da2bc262f1627fc0333","value":false}]},{"label":"Citroen","value":false,"checkboxId":"Citroen","children":[{"label":"C-Zero ","id":"5f043b11bc262f1627fc022c","checkboxId":"5f043b11bc262f1627fc022c","value":false},{"label":"C-Zero ","id":"5f043bd2bc262f1627fc0281","checkboxId":"5f043bd2bc262f1627fc0281","value":false},{"label":"E-Berlingo Multispace","id":"5f043c08bc262f1627fc028f","checkboxId":"5f043c08bc262f1627fc028f","value":false},{"label":"e-C4 ","id":"5f043de0bc262f1627fc034d","checkboxId":"5f043de0bc262f1627fc034d","value":false}]},{"label":"Jaguar","value":false,"checkboxId":"Jaguar","children":[{"label":"I-Pace 90 kWh","id":"5d161becc9eef401a6d9d21e","checkboxId":"5d161becc9eef401a6d9d21e","value":false},{"label":"I-Pace EV320","id":"5f48c78540d9c430c12c3c75","checkboxId":"5f48c78540d9c430c12c3c75","value":false},{"label":"I-Pace EV400","id":"5f043de1bc262f1627fc034f","checkboxId":"5f043de1bc262f1627fc034f","value":false}]},{"label":"Hyundai","value":false,"checkboxId":"Hyundai","children":[{"label":"IONIQ 38 kWh","id":"5d161bf7c9eef434b3d9d23d","checkboxId":"5d161bf7c9eef434b3d9d23d","value":false},{"label":"IONIQ Electric","id":"5d161be2c9eef47da5d9d202","checkboxId":"5d161be2c9eef47da5d9d202","value":false},{"label":"Kona Electric 39 kWh","id":"5f043d62bc262f1627fc031d","checkboxId":"5f043d62bc262f1627fc031d","value":false},{"label":"Kona Electric 39 kWh","id":"5d161bf1c9eef4063cd9d22c","checkboxId":"5d161bf1c9eef4063cd9d22c","value":false},{"label":"Kona Electric 64 kWh","id":"5d161bf0c9eef4ce69d9d22a","checkboxId":"5d161bf0c9eef4ce69d9d22a","value":false},{"label":"Kona Electric 64 kWh","id":"5f043d2abc262f1627fc02ff","checkboxId":"5f043d2abc262f1627fc02ff","value":false}]},{"label":"Honda","value":false,"checkboxId":"Honda","children":[{"label":"e Advance","id":"5f043d4dbc262f1627fc0313","checkboxId":"5f043d4dbc262f1627fc0313","value":false},{"label":"e ","id":"5f043cc0bc262f1627fc02d3","checkboxId":"5f043cc0bc262f1627fc02d3","value":false}]},{"label":"Ford","value":false,"checkboxId":"Ford","children":[{"label":"Focus Electric","id":"5f043ae5bc262f1627fc021c","checkboxId":"5f043ae5bc262f1627fc021c","value":false},{"label":"Mustang Mach-E ER AWD","id":"5f043d86bc262f1627fc0329","checkboxId":"5f043d86bc262f1627fc0329","value":false},{"label":"Mustang Mach-E ER RWD","id":"5f043d78bc262f1627fc0325","checkboxId":"5f043d78bc262f1627fc0325","value":false},{"label":"Mustang Mach-E SR AWD","id":"5f043d7fbc262f1627fc0327","checkboxId":"5f043d7fbc262f1627fc0327","value":false},{"label":"Mustang Mach-E SR RWD","id":"5f043d76bc262f1627fc0323","checkboxId":"5f043d76bc262f1627fc0323","value":false}]},{"label":"Fiat","value":false,"checkboxId":"Fiat","children":[{"label":"500e Convertible","id":"5f043dbfbc262f1627fc033f","checkboxId":"5f043dbfbc262f1627fc033f","value":false},{"label":"500e Hatchback","id":"5f043dd9bc262f1627fc034b","checkboxId":"5f043dd9bc262f1627fc034b","value":false}]},{"label":"DS","value":false,"checkboxId":"DS","children":[{"label":"3 Crossback E-Tense","id":"5f043c86bc262f1627fc02bd","checkboxId":"5f043c86bc262f1627fc02bd","value":false}]}]`
      ),
      value2: false
    }),
    components: { CheckboxTree },
    template: `<div class="theme-dark">
      <div class=" grid grid-cols-1 gap-2">
        <CheckboxTree v-bind="$props" v-model="options" />
      </div>
    </div>`
  };
};

const ChildlessTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      options: [
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "234324"
        },
        {
          value: true,
          checkboxId: "12341324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "2343223424"
        },
        {
          value: true,
          checkboxId: "412323441324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "23423431224"
        },
        {
          value: true,
          checkboxId: "123423411324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        }
      ],
      value2: false
    }),
    components: { CheckboxTree },
    template: `<div class="theme-dark">
      <div class=" grid grid-cols-1 gap-2">
        <CheckboxTree v-bind="$props" v-model="options" />
      </div>
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {};

export const ToggleAll = Template.bind({});
ToggleAll.args = {
  all: true
};

export const ChildlessNormal = ChildlessTemplate.bind({});
Normal.args = {};

export const ChildlessToggleAll = ChildlessTemplate.bind({});
ToggleAll.args = {
  all: true
};
