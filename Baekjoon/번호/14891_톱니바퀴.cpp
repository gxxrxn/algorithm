#include <iostream>
#include <cstdio>
#include <cmath>
#include <time.h>

#define COG_SIZE	8

#define N	0
#define S	1

#define CLOCKWISE	1
#define COUNTERCOLOCKWISE	-1
#define NOROTATE	0

using namespace std;

class Gear {
private:
	int gear_num; // 몇 번째에 위치한 톱니바퀴인지를 알려주는 변수
	int status[COG_SIZE]; // 현재 톱니바퀴의 극 상태를 저장하기 위한 배열
	int rotate_direction = NOROTATE; // 톱니바퀴의 회전 방향을 저장해두기 위한 변수

	// 옆의 톱니바퀴와 맞닿아 있는 극이 서로 다를 때
	// 현재 톱니바퀴의 rotate_direction을 바꿔주기 위한 함수
	void changeDirectionOposite(int direction) {
		if (direction == CLOCKWISE) {
			this->rotate_direction = COUNTERCOLOCKWISE;
		}
		else if (direction == COUNTERCOLOCKWISE) {
			this->rotate_direction = CLOCKWISE;
		}
	}

public:
	Gear() {}

	Gear(int gear_num, int status[COG_SIZE]) {
		this->gear_num = gear_num;
		for (int i = 0; i < COG_SIZE; i++) {
			this->status[i] = status[i];
		}
	}

	void setRotateDirection(int direction) {
		this->rotate_direction = direction;
	}

	// 현재 톱니바퀴가 옆의 톱니바퀴때문에 회전해야하는지 확인하는 함수
	void checkRotateDirection(Gear& next) {
		if (next.rotate_direction == NOROTATE) {
			return;
		}

		// 현재 톱니바퀴의 왼쪽 톱니바퀴인 경우
		if (next.gear_num == this->gear_num - 1) {
			if ((next.status[2] != this->status[6])) {
				// 왼쪽 톱니바퀴와 현재 톱니바퀴의 극이 다르면
				// 현재 톱니바퀴 회전 방향 반대로 설정
				changeDirectionOposite(next.rotate_direction);
			}
		}
		// 현재 톱니바퀴의 오른쪽 톱니바퀴인 경우
		else if (next.gear_num == this->gear_num + 1) {
			if (next.status[6] != this->status[2]) {
				// 오른쪽 톱니바퀴와 현재 톱니바퀴의 극이 다르면
				// 현재 톱니바퀴 회전 방향 반대로 설정
				changeDirectionOposite(next.rotate_direction);
			}
		}
	}

	void rotate() {
		int tmp;

		switch (this->rotate_direction) {
		case CLOCKWISE:
			tmp = this->status[COG_SIZE - 1];

			for (int i = COG_SIZE - 1; i > 0; i--) {
				this->status[i] = this->status[i - 1];
			}
			this->status[0] = tmp;
			
			rotate_direction = NOROTATE;

			break;
		case COUNTERCOLOCKWISE:
			tmp = this->status[0];

			for (int i = 0; i < COG_SIZE - 1; i++) {
				this->status[i] = this->status[i + 1];
			}
			this->status[COG_SIZE - 1] = tmp;

			rotate_direction = NOROTATE;

			break;
		}
	}

	void printCogStatus() {
		for (int i = 0; i < COG_SIZE; i++) {
			cout << this->status[i] << " ";
		}
		cout << endl;
	}

	int getGearScore() {
		int score = 0;

		if (this->status[0] == S) {
			score = pow(2, this->gear_num);
		}

		return score;
	}
};

int main() {
	Gear gear[4];

	for (int i = 0; i < 4; i++) {
		int gear_status[COG_SIZE];
		
		for (int cog = 0; cog < COG_SIZE; cog++) {
			char status;
			cin >> status; // char형으로 상태값을 입력 받음.

			// 입력받은 값의 아스키코드에서 '0'의 아스키코드인 48을 뺸 값을
			// int gear_status[] 배열에 저장
			gear_status[cog] = status - '0';
		}
		
		gear[i] = Gear(i, gear_status);
	}

	int k;
	cin >> k;

	for (int i = 0; i < k; i++) {
		int gear_num;
		int direction;

		cin >> gear_num >> direction;

		int flag = gear_num - 1;

		gear[flag].setRotateDirection(direction);

		while (1) {
			if (flag < 1)
				break;

			gear[flag - 1].checkRotateDirection(gear[flag]);
			flag--;
		}
		
		flag = gear_num - 1;

		while (1) {
			if (flag > 2)
				break;

			gear[flag + 1].checkRotateDirection(gear[flag]);
			flag++;
		}

		for (int i = 0; i < 4; i++) {
			gear[i].rotate();
		}
	}

	int score = 0;

	for (int i = 0; i < 4; i++) {
		score += gear[i].getGearScore();
	}

	cout << score << endl;

	return 0;
}