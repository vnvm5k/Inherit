import Character from '../Character';
import Swordsman from '../Swordsman';

test('constructor', () => {
  const player = new Character('мечник', 'Swordsman');
  expect(player.name).toEqual('мечник');
});


test('constructor Error', () => {
  const player = new Swordsman('f', 'bbb');
  expect(player).toThrowError(new Error('Некорректное значение'));
});


test('levelUp', () => {
  const player = new Swordsman('мечник', 'Swordsman');
  player.levelUp();
  expect(player.level).toBe(2);
});

test('levelUp Error', () => {
  const player = new Swordsman('мечник', 'Swordsman');
  player.damage(112);
  const level = player.levelUp();
  expect(level).toThrowError(new Error('нельзя повысить левел умершего'));
});


test('damage', () => {
  const player = new Swordsman('мечник', 'Swordsman');
  player.damage(10);
  expect(player.health).toBe(91);
});

test('damage Error', () => {
  const player = new Swordsman('мечник', 'Swordsman');
  player.damage(112);
  expect(player.health).toEqual(-0.7999999999999972);

  player.damage(10);
  expect(player.health).toBe(-0.7999999999999972);
});
